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
RUN turbo prune db --docker


# package builder
FROM base AS builder
WORKDIR /app 

COPY --from=prepare /app/out/json .
RUN pnpm install --frozen-lockfile

COPY --from=prepare /app/out/full/ .

RUN pnpm turbo build --filter=db... --force


RUN pnpm deploy --filter=db --prod --legacy /prod/db


# final image version for the image build runner

FROM node:alpine
WORKDIR /app

RUN addgroup --system --gid 1001 db
RUN adduser --system --uid 1001 db

USER db


COPY --from=builder /prod/db ./
RUN ls


CMD [ "node","/app/dist/index.js"]