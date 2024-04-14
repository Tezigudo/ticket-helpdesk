import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Typography, Container } from "@mui/material";
import { Ticket } from "@prisma/client";
import TicketBoard from "@/components/TicketBoard";
import ticketAPI from "@/handlers/ticketAPI";
import AddTicketButton from "@/components/AddTicketButton";
import "../app/globals.css";
import axios from "axios";

const Home: React.FC = () => {
  const [allTickets, setAllTickets] = useState<Ticket[]>([]);

  const fetchTickets = () => {
    const getAllTickets = async () => {
      try {
        const res = await ticketAPI.getAll();
        setAllTickets(res.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch tickets");
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
  
    // Find the moved ticket
    const movedTicketIndex = newTickets.findIndex(
      (ticket) => ticket.id.toString() === draggableId
    );
  
    if (movedTicketIndex === -1) {
      return; // Moved ticket not found
    }
  
    const movedTicket = newTickets[movedTicketIndex];
  
    // Remove the moved ticket from its original position
    newTickets.splice(movedTicketIndex, 1);
  
    // Insert the moved ticket at the destination index
    newTickets.splice(destination.index, 0, movedTicket);
  
    // Update the status of the moved ticket
    movedTicket.status = destination.droppableId.toLowerCase();
  
    setAllTickets(newTickets);
  
    const updateTicketStatus = async () => {
      try {
        await axios.put(`/api/tickets/${parseInt(draggableId)}`, {
          status: destination.droppableId.toLowerCase(),
        });
      } catch (error) {
        console.error(error);
        alert("Failed to update ticket status");
        setAllTickets([...allTickets]);
      }
    };
    updateTicketStatus();
  };
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Helpdesk Support Ticket Management
        </Typography>
        <TicketBoard tickets={allTickets} />
        <AddTicketButton onTicketAdded={handleTicketUpdate} />
      </Container>
    </DragDropContext>
  );
};

export default Home;
