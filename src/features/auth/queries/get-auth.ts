import { cookies } from 'next/headers';
import { cache } from 'react';
import { lucia } from '@/lib/lucia';

export const getAuth = cache(async () => {
  // 1. Retrieves the session ID from cookies
  const sessionId =
    (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  // 2. If no session ID is found, it returns an object with user and session set to null
  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  // 3. If a session ID is found, it validates the session using the lucia library
  const result = await lucia.validateSession(sessionId);

  try {
    // 4. If the session is valid and fresh, it refreshes the session cookie
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    // 5. If the session is invalid, it sets a blank session cookie
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {
    // 6. It handles errors gracefully without breaking in React Server Components (RSC)
    // do nothing if used in a RSC
  }

  return result;
});
