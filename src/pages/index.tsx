import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Typography, Container, Box } from "@mui/material";
import { Ticket } from "@prisma/client";
import TicketBoard from "@/components/TicketBoard";
import ticketAPI from "@/handlers/ticketAPI";
import AddTicketButton from "@/components/AddTicketButton";
import "../app/globals.css";
import { showFailedAlert } from "@/utils/showAlert";

const Home: React.FC = () => {
  const [allTickets, setAllTickets] = useState<Ticket[]>([]);

  const fetchTickets = () => {
    const getAllTickets = async () => {
      try {
        const res = await ticketAPI.getAll();
        setAllTickets(res.data);
      } catch (error) {
        console.error(error);
        showFailedAlert ("Failed to fetch tickets");
      }
    };
    getAllTickets();
  };

  useEffect(() => fetchTickets(), []);

  const handleTicketUpdate = () => {
    fetchTickets();
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination || result.reason === "CANCEL") {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newTickets = [...allTickets];
    const movedTicketIndex = newTickets.findIndex(
      (ticket) => ticket.id.toString() === draggableId
    );
    if (movedTicketIndex === -1) {
      return;
    }

    const movedTicket = newTickets[movedTicketIndex];
    newTickets.splice(movedTicketIndex, 1);
    newTickets.splice(destination.index, 0, movedTicket);
    movedTicket.status = destination.droppableId.toLowerCase();
    setAllTickets(newTickets);

    const updateTicketStatus = async () => {
      try {
        await ticketAPI.update(parseInt(draggableId), {
          status: destination.droppableId.toLowerCase(),
        });
  
      } catch (error) {
        console.error(error);
        // alert("Failed to update ticket status");
        showFailedAlert("Failed to update ticket status");
        setAllTickets([...allTickets]);
      }
    };
    updateTicketStatus();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            Helpdesk Support Ticket Management
          </Typography>
        </Box>
        <TicketBoard tickets={allTickets} />
        <AddTicketButton onTicketAdded={handleTicketUpdate} />
      </Container>
    </DragDropContext>
  );
};

export default Home;