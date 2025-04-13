export type User =
  | {
      id: string;
      created_at: Date;
      user_name: string | null;
      first_name: string | null;
      last_name: string | null;
      email: string;
    }
  | null
  | undefined;
