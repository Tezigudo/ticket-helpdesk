import { TicketListProps } from "@/interfaces/TicketList";
import { Droppable, DraggableProvided } from "react-beautiful-dnd";
import { Box, Typography } from "@mui/material";
import TicketCard from "./TicketCard";
import { useEffect, useState } from "react";
import { Ticket } from "@prisma/client/edge";
import { getTicketBgColor } from "@/utils/getTicketBgColor";
import { TicketStatus } from "@/enums/TicketStatus";

const TicketList = ({ title, tickets, onTicketUpdate, sortMode }: TicketListProps) => {
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    setFilteredTickets(
      tickets
        .filter((ticket) => ticket.status === title.toLowerCase())
        .sort(
          (a: Ticket, b: Ticket) =>(
            sortMode === "asc"
              ? new Date(b.latestUpdateTimestamp).getTime() - new Date(a.latestUpdateTimestamp).getTime()
              : new Date(a.latestUpdateTimestamp).getTime() - new Date(b.latestUpdateTimestamp).getTime())
        )
    );
  }, [tickets]);

  return (
    <Box
      sx={{
        flex: 1,
        paddingTop: "8px",
        paddingBottom: "16px",
        bgcolor: "#eaeaee",
        "&:first-of-type": {
          paddingLeft: "5px",
          borderTopLeftRadius: 5,
        },
        "&:last-of-type": {
          paddingRight: "5px",
          borderTopRightRadius: 5,
        },
        justifyContent: "space-between",
        marginTop: "20px",
        borderRadius: 3,
        width: "70%",
        margin: "10px",
      }}>
      <Typography align="center" variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Droppable droppableId={title} type="TODO">
        {(provided: DraggableProvided, snapshot: DraggableProvided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={snapshot.isDraggingOver ? " isDraggingOver" : ""}
            sx={{
              // backgroundColor: snapshot.isDraggingOver ? "grey.200" : "grey.100",
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              padding: "5px",
              height: "60vh",
              overflowY: "auto",
              "&.isDraggingOver": {
                // bgcolor: "#dadadf",
                opacity: 0.7,
              },
              backgroundColor: getTicketBgColor(title as TicketStatus),
            }}>
            {filteredTickets.map((ticket, index) => (
              <TicketCard key={ticket.id} ticket={ticket} index={index} onTicketUpdate={onTicketUpdate} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default TicketList;
