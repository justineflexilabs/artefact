import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    role: number;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    email: string;
    id: string;
    name: string;
    accessToken: string;
    role: number;
  }
}
