import React from "react";
import TicketList from "./TicketList";
import { Box } from "@mui/material";
import { TicketBoardProps } from "@/interfaces/TicketBoard";

const TicketBoard: React.FC<TicketBoardProps> = ({ tickets }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "80vh" }}>
      <Box sx={{ display: "flex", overflowX: "auto" }}>
        <TicketList title="Pending" tickets={tickets} />
        <TicketList title="Accepted" tickets={tickets} />
        <TicketList title="Resolved" tickets={tickets} />
        <TicketList title="Rejected" tickets={tickets} />
      </Box>
    </Box>
  );
};

export default TicketBoard;