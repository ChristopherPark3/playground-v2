"use client";

import { getUser } from "../../actions/getUsers";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const user = await getUser(id);
      return user;
    },
  });
};

export default useGetUser;
