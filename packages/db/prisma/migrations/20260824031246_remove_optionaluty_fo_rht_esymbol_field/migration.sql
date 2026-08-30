/*
  Warnings:

  - Made the column `img` on table `Symbol` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Symbol" ALTER COLUMN "img" SET NOT NULL;
