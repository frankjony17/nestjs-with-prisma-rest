-- CreateTable
CREATE TABLE "benefit_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "benefit_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "benefit_type_name_key" ON "benefit_type"("name");
