import { useQuery } from "@tanstack/react-query";
import { queryTimes } from "../../constant/queryTimes";
import { getUserProfile } from "./functions";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    staleTime: queryTimes.STALE_TIME,
  });
};
