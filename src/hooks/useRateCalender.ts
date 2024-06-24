import { useQuery } from "@tanstack/react-query";
import { fetchRateCalender } from "../utils/api";

export const useRateCalender = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ["rateCalender", startDate, endDate],
    queryFn: () => fetchRateCalender(startDate, endDate),
  });
};
