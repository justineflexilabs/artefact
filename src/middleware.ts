export { default } from 'next-auth/middleware';

//Add protected routes/pages here...
export const config = {
  matcher: ['/', '/dashboard', '/add-installation', '/users'],
};
