import { prisma } from '@/lib/prisma';

export const getTickets = async (userId: string | undefined) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};

//Files in the queries folder (like get-ticket.ts) that are only imported
// and used by server components don't need the 'use server' directive

//If they're only called from server components or other server-side code,
// they're already running on the server
