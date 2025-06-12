-- CreateEnum
CREATE TYPE "SIDE" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "TYPE" AS ENUM ('LIMIT', 'MARKET');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('PENDING', 'FULL_FILLED', 'PARTIALLY_FILLED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Orders" (
    "orderId" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "side" "SIDE" NOT NULL,
    "type" "TYPE" NOT NULL,
    "quote_price" DOUBLE PRECISION NOT NULL,
    "quote_quantity" DOUBLE PRECISION NOT NULL,
    "filled_quantity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "filled_price" DOUBLE PRECISION NOT NULL DEFAULT -1,
    "timestamp" BIGINT NOT NULL,
    "updatedAt" BIGINT NOT NULL,
    "status" "STATUS" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Orders_orderId_key" ON "Orders"("orderId");
