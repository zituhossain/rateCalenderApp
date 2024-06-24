import React from "react";
import { TextField } from "@mui/material";
import { DateRangePicker as MuiDateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

// Define DateRange type if it isn't exported from the package
type DateRange<T> = [T | null, T | null];

interface DateRangePickerProps {
  value: DateRange<Dayjs>;
  onChange: (dateRange: DateRange<Dayjs>) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateRangePicker
        startText="Start Date"
        endText="End Date"
        value={value}
        onChange={onChange}
        slotProps={{
          textField: { helperText: "Select a date range" },
        }}
      />
    </LocalizationProvider>
  );
};

export default DateRangePicker;
