FROM node:alpine AS base
ENV PNPM_VERSION=10.11.0

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
# build process for turbo repo repository prepartion
FROM base AS prepare

WORKDIR /app
RUN pnpm add turbo --global

COPY . .
RUN turbo prune engine --docker


# package builder
FROM base AS builder
WORKDIR /app 

COPY --from=prepare /app/out/json .
RUN pnpm install --frozen-lockfile

COPY --from=prepare /app/out/full/ .

RUN cd /app/apps/engine && pnpm exec tsc --showConfig

RUN pnpm turbo build --filter=engine... --force
RUN echo "=== ENGINE OUTPUT ===" \
    && sed -n '1,30p' /app/apps/engine/dist/index.js


RUN pnpm deploy --filter=engine --prod --legacy /prod/engine


# final image version for the image build runner

FROM node:alpine
WORKDIR /app

RUN addgroup --system --gid 1001 engine
RUN adduser --system --uid 1001 engine

USER engine


COPY --from=builder /prod/engine ./
RUN ls



CMD [ "node","/app/dist/index.js"]