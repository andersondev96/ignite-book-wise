import NextAuth from "next-auth";

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      avatar_url: string | null;
    }
  }
}