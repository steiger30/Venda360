/*
  Warnings:

  - You are about to drop the column `preco` on the `sales` table. All the data in the column will be lost.
  - Added the required column `valorApagar` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "formaPagamento" TEXT NOT NULL,
    "valorApagar" INTEGER NOT NULL,
    "userId" INTEGER,
    "customersId" INTEGER NOT NULL,
    CONSTRAINT "sales_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_sales" ("createdAt", "customersId", "formaPagamento", "id", "updatedAt", "userId") SELECT "createdAt", "customersId", "formaPagamento", "id", "updatedAt", "userId" FROM "sales";
DROP TABLE "sales";
ALTER TABLE "new_sales" RENAME TO "sales";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
