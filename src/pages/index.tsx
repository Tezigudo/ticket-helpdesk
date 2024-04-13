import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Typography, Container } from "@mui/material";
import { Ticket } from "@prisma/client";
import TicketBoard from "@/components/TicketBoard";
import ticketAPI from "@/(api)/ticketAPI";
import AddTicketButton from "@/components/AddTicketButton";
import "../app/globals.css"

const Home: React.FC = () => {
  const [allTickets, setAllTickets] = useState<Ticket[]>([]);

  useEffect(() => {
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
  }, []);

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

    movedTicket.status = destination.droppableId;

    newTickets.splice(source.index, 1);
    newTickets.splice(destination.index, 0, movedTicket);

    setAllTickets(newTickets);

    const updateTicketStatus = async () => {
      console.log(destination)
      try {
        await ticketAPI.update(parseInt(draggableId), { status: destination.droppableId });
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
        <AddTicketButton/>
      </Container>
    </DragDropContext>
  );
};

export default Home;
