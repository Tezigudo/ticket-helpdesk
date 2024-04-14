import { TicketListProps } from "@/interfaces/TicketList";
import { Droppable, DraggableProvided } from "react-beautiful-dnd";
import { Box, Typography, Button } from "@mui/material";
import TicketCard from "./TicketCard";
import { useEffect, useState } from "react";
import { Ticket } from "@prisma/client/edge";

const TicketList = ({ title, tickets }: TicketListProps) => {
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    setFilteredTickets(tickets.filter((ticket) => ticket.status === title.toLowerCase()));
  }, [tickets]);

  return (
    <Box
      sx={{
        flex: 1,
        paddingTop: "8px",
        paddingBottom: "16px",
        bgcolor: "#eaeaee",
        "&:first-child": {
          paddingLeft: "5px",
          borderTopLeftRadius: 5,
        },
        "&:last-child": {
          paddingRight: "5px",
          borderTopRightRadius: 5,
        },
        justifyContent: "space-between",
        marginTop: "20px",
        borderRadius: 4,
        width: "70%",
        margin: "10px"
      }}>
      <Typography align="center" variant="subtitle1">
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
              "&.isDraggingOver": {
                bgcolor: "#dadadf",
              },
            }}>
            {filteredTickets.map((ticket, index) => (
              <TicketCard key={ticket.id} ticket={ticket} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default TicketList;
