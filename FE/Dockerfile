FROM oven/bun:1.1.20-alpine AS builder

WORKDIR /app


COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile


COPY . .


COPY .env.production .env.production


RUN bun run build

FROM oven/bun:1.1.20-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["bun", "run", "start"]
