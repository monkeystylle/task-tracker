import { User } from '@prisma/client';

type Entity = {
  userId: string | null;
};

export const isOwner = (
  authUser: User | null | undefined, // The currently logged-in user
  entity: Entity | null | undefined // The entity to check ownership of
) => {
  if (!authUser || !entity) {
    return false; // If either user or entity is null/undefined, not an owner
  }

  if (!entity.userId) {
    return false; // If entity has no userId, not an owner
  }

  if (entity.userId !== authUser.id) {
    return false; // If entity's userId doesn't match user's id, not an owner
  } else {
    return true; // All checks passed, user is the owner
  }
};
