// src/components/RateCalender.tsx

import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateRangePicker from "./DateRangePicker";
import RoomCategory from "./RoomCategory";
import { useRateCalender } from "../hooks/useRateCalender";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";

const RateCalender: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(7, "day"),
  ]);

  // Format dates to "YYYY-MM-DD"
  const startDate = dateRange[0]?.format("YYYY-MM-DD");
  const endDate = dateRange[1]?.format("YYYY-MM-DD");

  const { data, isPending, error } = useRateCalender(startDate, endDate);

  return (
    <>
      <h1>Rate Calendar</h1>
      <DateRangePicker
        value={dateRange}
        onChange={(newChange) => setDateRange(newChange)}
      />

      {isPending && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data &&
        data.map((room) => (
          <RoomCategory
            key={room.name}
            name={room.name}
            occupancy={room.occupancy}
            inventory_calendar={room.inventory_calendar}
            rate_plans={room.rate_plans}
          />
        ))}
    </>
  );
};

export default RateCalender;
