import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Typography, Container } from "@mui/material";
import { Ticket } from "@prisma/client";
import TicketBoard from "@/components/TicketBoard";
import ticketAPI from "@/handlers/ticketAPI";
import AddTicketButton from "@/components/AddTicketButton";
import "../app/globals.css"
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
  }

  useEffect(()=> fetchTickets(), []);

  const handleTicketUpdate = () => {
    fetchTickets();
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination || result.reason === "CANCEL") {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newTickets = [...allTickets];
    const movedTicket = newTickets.find((ticket) => ticket.id.toString() === draggableId);

    if (!movedTicket) {
      return;
    }

    const destinationTickets = newTickets.filter(ticket => ticket.status === destination.droppableId);


    if (destinationTickets.length > 0) {
      // Determine the correct index to insert the moved ticket
      const insertIndex = Math.min(destination.index, destinationTickets.length);
  
      // Insert the moved ticket at the correct position
      newTickets.splice(insertIndex, 0, movedTicket);
    } else {
      // If there are no existing tickets, simply move the ticket to the destination list
      movedTicket.status = destination.droppableId.toLowerCase();
      newTickets.splice(source.index, 1);
      newTickets.splice(destination.index, 0, movedTicket);
    }

    setAllTickets(newTickets);

    console.log("newticketttt", newTickets)

    const updateTicketStatus = async () => {
      try {
        // await ticketAPI.update(parseInt(draggableId), { status: destination.droppableId });
        await axios.put(`/api/tickets/${parseInt(draggableId)}`, { status: destination.droppableId.toLowerCase() });
      } catch (error) {
        console.error(error);
        alert("Failed to update ticket status");
        setAllTickets([...allTickets]);
      }
    }
    updateTicketStatus();
 
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Helpdesk Support Ticket Management
        </Typography>
        <TicketBoard tickets={allTickets} />
        <AddTicketButton onTicketAdded={handleTicketUpdate}/>
      </Container>
    </DragDropContext>
  );
};

export default Home;
