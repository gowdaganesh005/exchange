/*
  Warnings:

  - Added the required column `userId` to the `Ledger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ledger" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Ledger" ADD CONSTRAINT "Ledger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
