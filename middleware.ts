import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  async afterAuth(auth, req, evt) {
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');

    if (isAdminRoute) {
      if (!auth.userId) {
        // Redirect to home if there's no userId
        return NextResponse.redirect(new URL('/', req.url));
      }

      const user = await clerkClient.users.getUser(auth.userId);

      if (user?.publicMetadata?.role !== 'admin') {
        // Redirect non-admin users to the homepage
        return NextResponse.redirect(new URL('/', req.url));
      }
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
