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
RUN turbo prune websocket --docker


# package builder
FROM base AS builder
WORKDIR /app 

COPY --from=prepare /app/out/json .
RUN pnpm install --frozen-lockfile

COPY --from=prepare /app/out/full/ .

RUN cd /app/apps/websocket && pnpm exec tsc --showConfig

RUN pnpm turbo build --filter=websocket... --force
RUN echo "=== websocket OUTPUT ===" \
    && sed -n '1,30p' /app/apps/websocket/dist/index.js


RUN pnpm deploy --filter=websocket --prod --legacy /prod/websocket


# final image version for the image build runner

FROM node:alpine
WORKDIR /app

RUN addgroup --system --gid 1001 websocket
RUN adduser --system --uid 1001 websocket

USER websocket


COPY --from=builder /prod/websocket ./
RUN ls



CMD [ "node","/app/dist/index.js"]