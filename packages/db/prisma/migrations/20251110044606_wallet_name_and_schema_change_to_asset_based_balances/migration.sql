/*
  Warnings:

  - You are about to drop the column `walletId` on the `Ledger` table. All the data in the column will be lost.
  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `balanceId` to the `Ledger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ledger" DROP CONSTRAINT "Ledger_walletId_fkey";

-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_userId_fkey";

-- AlterTable
ALTER TABLE "Ledger" DROP COLUMN "walletId",
ADD COLUMN     "balanceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Wallet";

-- CreateTable
CREATE TABLE "Balances" (
    "balanceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "asset" TEXT NOT NULL,
    "freeBalance" BIGINT NOT NULL DEFAULT 0,
    "lockedBalance" BIGINT NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Balances_balanceId_key" ON "Balances"("balanceId");

-- AddForeignKey
ALTER TABLE "Balances" ADD CONSTRAINT "Balances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ledger" ADD CONSTRAINT "Ledger_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "Balances"("balanceId") ON DELETE RESTRICT ON UPDATE CASCADE;
