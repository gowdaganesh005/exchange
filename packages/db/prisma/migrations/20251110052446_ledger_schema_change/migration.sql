/*
  Warnings:

  - You are about to drop the column `reason` on the `Ledger` table. All the data in the column will be lost.
  - Added the required column `symbol` to the `Ledger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ledger" DROP COLUMN "reason",
ADD COLUMN     "symbol" TEXT NOT NULL;
