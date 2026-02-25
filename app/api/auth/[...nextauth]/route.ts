import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb-client';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import dbConnect from '@/lib/mongodb';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
          rank: user.rank,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async jwt({ token, user }: { token: any, user?: any }) {
      if (user) {
        token.role = user.role;
        token.rank = user.rank;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role;
        session.user.rank = token.rank;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };