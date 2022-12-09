import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const movies = await prisma.movie.findMany();
  res.json(movies);
}
