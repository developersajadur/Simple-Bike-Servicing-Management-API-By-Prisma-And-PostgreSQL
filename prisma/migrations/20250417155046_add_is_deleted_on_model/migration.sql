-- AlterTable
ALTER TABLE "bikes" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "service_records" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
