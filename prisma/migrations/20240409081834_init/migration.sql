-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdTimestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latestUpdateTimestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
