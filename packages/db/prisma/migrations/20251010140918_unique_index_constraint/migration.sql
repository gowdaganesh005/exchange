/*
  Warnings:

  - A unique constraint covering the columns `[symbol]` on the table `Trades` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[timestamp]` on the table `Trades` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Trades_symbol_key" ON "Trades"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Trades_timestamp_key" ON "Trades"("timestamp");
