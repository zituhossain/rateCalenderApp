import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateRangePicker from "./DateRangePicker";
import RoomCategory from "./RoomCategory";
import { useRateCalendar } from "../hooks/useRateCalendar";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Typography } from "@mui/material";

interface RatePlan {
  id: string;
  name: string;
  calendar: Array<{
    id: string;
    date: string;
    rate: number;
    min_length_of_stay: number;
    reservation_deadline: number;
  }>;
}

interface InventoryCalendar {
  id: string;
  date: string;
  available: number;
  status: boolean;
  booked: number;
}
interface RoomType {
  name: string;
  occupancy: number;
  inventory_calendar: InventoryCalendar[];
  rate_plans: RatePlan[];
}

const RateCalendar: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(7, "day"),
  ]);

  const startDate = dateRange[0]?.format("YYYY-MM-DD");
  const endDate = dateRange[1]?.format("YYYY-MM-DD");

  const { data, isPending, error } = useRateCalendar(startDate, endDate);

  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Typography variant="h4">Rate Calendar</Typography>
      <DateRangePicker
        value={dateRange}
        onChange={(newChange) => setDateRange(newChange)}
      />
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.map((room: RoomType) => (
          <RoomCategory
            key={room.name}
            name={room.name}
            occupancy={room.occupancy}
            inventory_calendar={room.inventory_calendar}
            rate_plans={room.rate_plans}
          />
        ))}
    </div>
  );
};

export default RateCalendar;
