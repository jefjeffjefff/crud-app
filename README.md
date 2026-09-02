# Student Records CRUD

Full-stack CRUD application using:

- Next.js (App Router)
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- React Hook Form + Zod validation
- shadcn-style UI component structure
- Vercel-ready deployment flow

## Student fields

- id
- student number
- first name
- last name
- middle name
- age
- address
- grade level

## Local setup

1. Install dependencies

```bash
npm install
```

2. Create environment file

```bash
copy .env.example .env
```

3. Put your PostgreSQL connection string in .env

Example:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/student_crud?schema=public"
```

4. Create migration and generate Prisma client

```bash
npm run prisma:migrate -- --name init
npm run prisma:generate
```

5. Run the app

```bash
npm run dev
```

Open http://localhost:3000

## Available scripts

- npm run dev
- npm run build
- npm run start
- npm run lint
- npm run prisma:migrate
- npm run prisma:generate
- npm run prisma:studio

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Provision a PostgreSQL database (Neon, Supabase, Railway, or Vercel Postgres).
4. Set DATABASE_URL in Vercel Project Settings > Environment Variables.
5. Add build command (optional override):

```bash
npm run prisma:generate && next build
```

6. Deploy.

After deployment, run migrations against your hosted database before using the app in production.
