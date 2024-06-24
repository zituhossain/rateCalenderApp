import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface RatePlan {
  id: string;
  name: string;
  calendar: Array<{
    id: string;
    date: Date;
    rate: number;
    min_length_of_stay: number;
    reservation_deadline: number;
  }>;
}

interface Inventorycalendar {
  id: string;
  date: Date;
  available: number;
  status: boolean;
  booked: number;
}

interface RoomCategoryProps {
  name: string;
  occupancy: number;
  inventory_calendar: Inventorycalendar[];
  rate_plans: RatePlan[];
}

const RoomCategory: React.FC<RoomCategoryProps> = ({
  name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  occupancy,
  inventory_calendar,
  rate_plans,
}) => {
  console.log("first", rate_plans);
  return (
    <div>
      <h1>{name}</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Rooms to Sell</TableCell>
            <TableCell>Net Booked</TableCell>
            {rate_plans.map((ratePlan) => (
              <TableCell key={ratePlan.id}>{ratePlan.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory_calendar.map((inventory) => (
            <TableRow key={inventory.id}>
              <TableCell>
                {new Date(inventory.date).toLocaleDateString()}
              </TableCell>
              <TableCell>{inventory.status ? "Open" : "Closed"}</TableCell>
              <TableCell>{inventory.available}</TableCell>
              <TableCell>{inventory.booked}</TableCell>
              {rate_plans?.map((plan) => {
                console.log("plan", plan);
                const rateInfo = plan.calendar
                  ?.map((a) => a)
                  .find((r) => r.date === inventory.date);
                return (
                  <TableCell key={plan.id}>
                    {rateInfo ? rateInfo.rate : "N/A"}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RoomCategory;
