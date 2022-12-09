import { PrismaClient } from "@prisma/client";
import { movies } from "../data";

const prisma = new PrismaClient();

async function main() {
  console.log("Removing previous seed data...");
  await prisma.movie.deleteMany();

  console.log("Seeding new data...");
  await prisma.movie.createMany({
    data: movies,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
