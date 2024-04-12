import React from "react";
import TicketList from "./TicketList";
import { Box } from "@mui/material";
import { TicketBoardProps } from "@/interfaces/TIcketBoard";

const TicketBoard: React.FC<TicketBoardProps> = ({ tickets }) => {

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TicketList title="Pending" tickets={tickets} />
      <TicketList title="Accepted" tickets={[]} />
      <TicketList title="Resolved" tickets={[]} />
      <TicketList title="Rejected" tickets={[]} />
    </Box>
  );
};

export default TicketBoard;
