"use server";

import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";

export const getComments = async (ticketId: string, offset?: number) => {
  const { user } = await getAuth();

  const where = {
    ticketId,
  };

  const skip = offset ?? 0;
  const take = 2;

  //$transaction is a Prisma feature that allows multiple database operations to be executed together. 
  // It ensures that either all operations succeed or none of them do.

  //skip: This tells Prisma how many records to skip before starting to fetch.
  //take: This tells Prisma how many records to fetch.

  const [comments, count] = await prisma.$transaction([
    prisma.comment.findMany({
      where,
      skip,
      take,
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.comment.count({
      where,
    }),
  ]);

  return {
    list: comments.map((comment) => ({
      ...comment,
      isOwner: isOwner(user, comment),
    })),
    metadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};