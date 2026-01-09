/*
  Warnings:

  - Added the required column `reason` to the `Ledger` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LedgerReason" AS ENUM ('TRADE_PROFIT', 'TRADE_COST', 'ASSET_CREDIT', 'ASSET_DEBIT', 'FEE', 'DEPOSIT', 'WITHDRAWAL');

-- AlterTable
ALTER TABLE "Ledger" ADD COLUMN     "reason" "LedgerReason" NOT NULL;
