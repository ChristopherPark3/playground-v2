"use client";

import { getUser } from "../../actions/getUsers";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id: string | null | undefined) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      if (!id) {
        return null;
      }
      const user = await getUser(id);
      return user;
    },
  });
};

export default useGetUser;
