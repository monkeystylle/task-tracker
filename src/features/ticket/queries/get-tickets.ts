import { prisma } from "@/lib/prisma";
import { SearchParams } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: SearchParams
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      ...(typeof searchParams.search === "string" && {
        title: {
          contains: searchParams.search,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      ...(searchParams.sort === undefined && { createdAt: "desc" }),
      ...(searchParams.sort === "bounty" && { bounty: "desc" }),
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
