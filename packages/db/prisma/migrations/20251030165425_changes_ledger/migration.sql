/*
  Warnings:

  - You are about to alter the column `freeBalance` on the `Wallet` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `lockedBalance` on the `Wallet` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - Added the required column `amount` to the `Ledger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ledger" ADD COLUMN     "amount" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Wallet" ALTER COLUMN "freeBalance" SET DEFAULT 0,
ALTER COLUMN "freeBalance" SET DATA TYPE BIGINT,
ALTER COLUMN "lockedBalance" SET DEFAULT 0,
ALTER COLUMN "lockedBalance" SET DATA TYPE BIGINT;
