# TaskTracker

A ticket management system built with Next.js 15

## 🚀 Overview

TaskTracker is a full-stack ticket management application that allows teams to create, track, and manage tasks efficiently.

**Note:** This application is currently optimized for desktop view only and is not yet responsive for mobile devices.

## ✨ Features

- **User Authentication**: Secure login and registration system with [Oslo](https://oslojs.dev/) authentication libraries
- **Ticket Management**: Create, view, edit, and delete tickets
- **Status Tracking**: Track tickets with different statuses (Open, In Progress, Done)
- **Comments System**: Add comments to tickets for better collaboration
- **Search & Filter**: Find tickets with search and filtering options using [nuqs](https://www.npmjs.com/package/nuqs)
- **Pagination**: Efficiently handle large numbers of tickets pagination
- **Sorting**: Sort tickets by various criteria using nuqs

## 🛠️ Tech Stack

- **Core Framework**:
  - Next.js 15
  - React 19
  - TypeScript

- **UI & Styling**:
  - Tailwind CSS
  - Shadcn UI components
  - next-themes (dark/light mode)

- **State Management & Data Fetching**:
  - TanStack React Query (data fetching)
  - Next.js Server Actions (backend operations)
  - nuqs (URL-based state management)

- **Database & Authentication**:
  - Prisma ORM
  - Supabase (PostgreSQL)
  - Oslo authentication libraries (@oslojs/crypto, @oslojs/encoding)

- **Utility Libraries**:
  - zod (schema validation for form and API data)
  - date-fns (date manipulation)
  - big.js (precise number calculations)
  - react-error-boundary (controlled error handling)
  - react-intersection-observer (scroll detection)
  - fastest-levenshtein (string similarity comparison)
  - use-debounce (debouncing user input)

### Key Architectural Decisions

1. **Feature-Based Architecture**:
   - The codebase is organized by features (e.g., `tickets`, `auth`, `comments`) rather than by type (e.g., `components`, `hooks`, `utils`).
   - Each feature contains its own components, hooks, and utilities, making it easier to scale and maintain the application.
    

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
