import React from "react";
import TicketList from "./TicketList";
import { Box } from "@mui/material";
import { TicketBoardProps } from "@/interfaces/TIcketBoard";
import { TicketStatus } from "@/enums/TicketStatus";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const TicketBoard: React.FC<TicketBoardProps> = ({
  tickets,
  onTicketUpdate,
  sortMode,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        marginTop: "10px",
      }}
    >
      <Box sx={{ display: "flex", overflowX: "auto" }}>
        {Object.values(TicketStatus).map((status) => (
          <TicketList
            key={status}
            title={capitalizeFirstLetter(status)}
            tickets={tickets}
            onTicketUpdate={onTicketUpdate}
            sortMode={sortMode}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TicketBoard;
