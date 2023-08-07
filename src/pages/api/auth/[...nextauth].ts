import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email !== 'john@gmail.com' || password !== '123') {
          throw new Error('Invalid credentials');
        }

        const user = {
          id: '1234',
          name: 'John Doe',
          email: 'john@gmail.com',
          accessToken: '123456',
          role: 1,
        };

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (token) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.role = token.role;
      return session;
    },
  },
};

export default NextAuth(authOptions);
