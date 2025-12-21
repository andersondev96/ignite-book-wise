import type { User } from "@prisma/client";

export type UserSchema = User & {
  totalPagesRead: number;
  totalBooksRates: number;
  totalAuthorRead: number;
  mostRatedCategory: string;
};
