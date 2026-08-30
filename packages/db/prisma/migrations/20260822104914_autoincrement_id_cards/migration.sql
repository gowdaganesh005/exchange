-- AlterTable
CREATE SEQUENCE symbol_symbolid_seq;
ALTER TABLE "Symbol" ALTER COLUMN "symbolId" SET DEFAULT nextval('symbol_symbolid_seq');
ALTER SEQUENCE symbol_symbolid_seq OWNED BY "Symbol"."symbolId";
