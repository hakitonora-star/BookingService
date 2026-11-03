/*
  Warnings:

  - Added the required column `Totalguests` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` ADD COLUMN `Totalguests` INTEGER NOT NULL;
