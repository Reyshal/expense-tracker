// prisma/seed.ts
import { PrismaClient, Prisma } from "@/generated/prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Reyshal",
    email: "reyshal@gmail.com",
  },
];

// Seed function
export async function main() {
  console.log(`✨ Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`✅ Created user with id: ${user.id}`);
  }
  console.log(`🚀 Seeding finished.`);
}

// Execute the seed script
main()
  .then(async () => {
    // Disconnect the Prisma Client
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // Handle any errors and disconnect the Prisma Client
    console.error(`❌ error: ${e}`);
    await prisma.$disconnect();
    process.exit(1);
  });
