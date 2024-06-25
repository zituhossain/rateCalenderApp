import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

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

interface RoomCategoryProps {
  name: string;
  occupancy: number;
  inventory_calendar: InventoryCalendar[];
  rate_plans: RatePlan[];
}

const RoomCategory: React.FC<RoomCategoryProps> = ({
  name,
  occupancy,
  inventory_calendar,
  rate_plans,
}) => {
  // Extract unique dates for the header
  const dates = inventory_calendar.map((inventory) => inventory.date);
  const uniqueDates = Array.from(new Set(dates));

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{name}</h2>
      <div style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              >
                Date
              </TableCell>
              {uniqueDates.map((date) => (
                <TableCell
                  key={date}
                  style={{
                    backgroundColor: inventory_calendar.find(
                      (inventory) => inventory.date === date
                    )?.status
                      ? "#fff"
                      : "red",
                    color: inventory_calendar.find(
                      (inventory) => inventory.date === date
                    )?.status
                      ? "#000"
                      : "#fff",
                  }}
                >
                  {new Date(date).toLocaleDateString(undefined, {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              >
                Status
              </TableCell>
              {inventory_calendar.map((inventory) => (
                <TableCell
                  key={inventory.id}
                  style={{
                    backgroundColor: inventory.status ? "green" : "red",
                    color: "#fff",
                  }}
                >
                  {inventory.status ? "Open" : "Closed"}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              >
                Rooms to Sell
              </TableCell>
              {inventory_calendar.map((inventory) => (
                <TableCell
                  key={inventory.id}
                  style={{
                    backgroundColor: inventory.status ? "#fff" : "red",
                    color: inventory.status ? "#000" : "#fff",
                  }}
                >
                  {inventory.available}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              >
                Net Booked
              </TableCell>
              {inventory_calendar.map((inventory) => (
                <TableCell
                  key={inventory.id}
                  style={{
                    backgroundColor: inventory.status ? "#fff" : "red",
                    color: inventory.status ? "#000" : "#fff",
                  }}
                >
                  {inventory.booked}
                </TableCell>
              ))}
            </TableRow>
            {rate_plans.map((ratePlan) => (
              <React.Fragment key={ratePlan.id}>
                <TableRow>
                  <TableCell
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: "#fff",
                      zIndex: 1,
                    }}
                  >
                    {ratePlan.name}
                    <p>
                      <PersonIcon
                        sx={{
                          fontSize: "20px",
                        }}
                        color="primary"
                      />{" "}
                      <span
                        style={{
                          position: "relative",
                          top: "-4px",
                          color: "blue",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: "12px" }} color="primary" />{" "}
                        {occupancy}
                      </span>
                    </p>
                  </TableCell>
                  {ratePlan.calendar.map((rate) => (
                    <TableCell
                      key={rate.id}
                      style={{
                        backgroundColor: inventory_calendar.find(
                          (inventory) => inventory.date === rate.date
                        )?.status
                          ? "#fff"
                          : "red",
                        color: inventory_calendar.find(
                          (inventory) => inventory.date === rate.date
                        )?.status
                          ? "#000"
                          : "#fff",
                      }}
                    >
                      {rate.rate}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: "#fff",
                      zIndex: 1,
                    }}
                  >
                    Min. Length of Stay
                  </TableCell>
                  {ratePlan.calendar.map((rate) => (
                    <TableCell
                      key={rate.id}
                      style={{
                        backgroundColor: inventory_calendar.find(
                          (inventory) => inventory.date === rate.date
                        )?.status
                          ? "#fff"
                          : "red",
                        color: inventory_calendar.find(
                          (inventory) => inventory.date === rate.date
                        )?.status
                          ? "#000"
                          : "#fff",
                      }}
                    >
                      {rate.min_length_of_stay}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: "#fff",
                      zIndex: 1,
                    }}
                  >
                    Min. Advance Reservation
                  </TableCell>
                  {ratePlan.calendar.map((rate) => (
                    <TableCell
                      key={rate.id}
                      style={{
                        backgroundColor: inventory_calendar.find(
                          (inventory) => inventory.date === rate.date
                        )?.status
                          ? "#fff"
                          : "red",
                        color: inventory_calendar.find(
                          (inventory) => inventory.date === rate.date
                        )?.status
                          ? "#000"
                          : "#fff",
                      }}
                    >
                      {rate.reservation_deadline}
                    </TableCell>
                  ))}
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RoomCategory;
