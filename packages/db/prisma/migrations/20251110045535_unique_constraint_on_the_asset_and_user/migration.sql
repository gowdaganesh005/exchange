/*
  Warnings:

  - A unique constraint covering the columns `[userId,asset]` on the table `Balances` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Balances_userId_asset_key" ON "Balances"("userId", "asset");
