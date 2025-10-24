# Expense Tracker

An early-stage Next.js 16+ project with TypeScript and Prisma (PostgreSQL), designed to track expenses.

> ⚠️ Early Stage – APIs and features are still in development.

## Features (So far)

- Next.js 16+ with App Router and TypeScript
- Prisma ORM with PostgreSQL
- lib/prisma.ts configured for safe hot reload in development
- Example API route to test database connection
- Dev-ready database migration setup

## Getting Started

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd expense-tracker
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment variables**

    - Copy the example environment file to create your own `.env`:
        ```bash
        cp .env.example .env
        ```
    - Open the .env file in the root directory and update it with your PostgreSQL credentials:
        ```bash
        DATABASE_URL="postgresql://username:password@localhost:5432/expense_tracker"
        ```
        Make sure to replace username, password, and expense_tracker with your own PostgreSQL database credentials.

4. **Set up Prisma**

    Generate Prisma Client:
    ```bash
    npx prisma generate
    ```
    Run initial migration (creates tables in the database):
    ```bash
    npx prisma migrate dev --name init
    ```
    (Optional) Reset the database if you want to start fresh:
    ```bash
    npx prisma migrate reset
    ```

5. **Run the development server**

    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000`
    Test the Prisma connection API route:
    ```bash
    http://localhost:3000/api/test-prisma
    ```

## Usage

- **Import Prisma anywhere in your app:**

    ```bash
    import { prisma } from "@/lib/prisma";
    
    const users = await prisma.user.findMany();
    ```

- **Add new models in prisma/schema.prisma and run migrations:**

    ```bash
    npx prisma migrate dev --name <migration-name>
    ```

## Tips

- Use `npx prisma migrate reset` in development to clear all tables safely.
- Always run `npx prisma generate` after updating schema.prisma.
- The `globalForPrisma` setup avoids multiple PrismaClient instances during hot reload.

## License

MIT License
