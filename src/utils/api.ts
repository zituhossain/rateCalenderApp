import axios from "axios";

export const fetchRateCalender = async (startDate: string, endDate: string) => {
  const { data } = await axios.get(
    "https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment",
    {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    }
  );
  return data.data;
};
