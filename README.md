# TaskTracker Pro

A modern ticket management system built with Next.js, React Query, and Prisma.

![TaskTracker Pro](https://img.shields.io/badge/Status-Portfolio%20Ready-brightgreen)

## 🚀 Overview

TaskTracker Pro is a full-stack ticket management application that allows teams to create, track, and manage tasks efficiently. Built with the latest web technologies, this application demonstrates my expertise in modern React development, state management, and database integration.

**Note:** This application is currently optimized for desktop view only and is not yet responsive for mobile devices.

## ✨ Features

- **User Authentication**: Secure login and registration system with [Oslo](https://oslojs.dev/) authentication libraries
- **Ticket Management**: Create, view, edit, and delete tickets
- **Status Tracking**: Track tickets with different statuses (Open, In Progress, Done)
- **Comments System**: Add comments to tickets for better collaboration
- **Search & Filter**: Find tickets quickly with powerful search and filtering options using [nuqs](https://www.npmjs.com/package/nuqs)
- **Pagination**: Efficiently handle large numbers of tickets with nuqs pagination
- **Sorting**: Sort tickets by various criteria using nuqs sorting capabilities

## 🛠️ Tech Stack

- **Frontend**:

  - Next.js 15 (App Router)
  - React 19 (RC)
  - Tailwind CSS for styling
  - Shadcn UI components (built on top of Tailwind)
  - TypeScript for type safety
  - [nuqs](https://www.npmjs.com/package/nuqs) for URL-based state management

- **Data Fetching & State Management**:

  - TanStack React Query
  - Next.js Server Components
  - Next.js Server Actions for mutations

- **Backend & Database**:
  - Next.js API Routes
  - Prisma ORM
  - Supabase (PostgreSQL) database
  - [Oslo](https://oslojs.dev/) authentication libraries (@oslojs/crypto, @oslojs/encoding)

## 📸 Screenshots

_[Add screenshots of your application here]_

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account for PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tasktracker-pro.git
   cd tasktracker-pro
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Seed the database:

   ```bash
   npm run prisma-seed
   ```

6. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🧪 Testing

```bash
npm run test
# or
yarn test
```

## 🌐 Deployment

This application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Ftasktracker-pro)

## 👨‍💻 About Me

I'm a passionate React Developer with expertise in building modern web applications. This project showcases my skills in:

- Building full-stack applications with Next.js
- Implementing data fetching with Server Components and mutations with Server Actions
- Creating clean, intuitive user interfaces with Shadcn UI and Tailwind
- Working with databases through Prisma ORM and Supabase
- Implementing URL-based state management with nuqs
- Writing clean, maintainable TypeScript code

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out if you have any questions or would like to discuss job opportunities:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)
