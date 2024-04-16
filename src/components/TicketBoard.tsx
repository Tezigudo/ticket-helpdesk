import React from "react";
import TicketList from "./TicketList";
import { Box } from "@mui/material";
import { TicketBoardProps } from "@/interfaces/TIcketBoard";

const TicketBoard: React.FC<TicketBoardProps> = ({ tickets, onTicketUpdate }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "70vh" }}>
      <Box sx={{ display: "flex", overflowX: "auto" }}>
        <TicketList title="Pending" tickets={tickets} onTicketUpdate={onTicketUpdate}/>
        <TicketList title="Accepted" tickets={tickets} onTicketUpdate={onTicketUpdate} />
        <TicketList title="Resolved" tickets={tickets} onTicketUpdate={onTicketUpdate}/>
        <TicketList title="Rejected" tickets={tickets} onTicketUpdate={onTicketUpdate}/>
      </Box>
    </Box>
  );
};

export default TicketBoard;