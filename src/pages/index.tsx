import React, { useEffect, useState } from 'react';
import TicketCard from '@/components/TicketCard';
import { DragDropContext, DropResult} from 'react-beautiful-dnd';
import { Box, Typography, Button, Container} from '@mui/material';
import { Ticket } from '@prisma/client';
import TicketList from '@/components/TicketList';
import TicketBoard from '@/components/TicketBoard';
import ticketAPI from '@/(api)/ticketAPI';


const dummyTickets = [
  {
    id: 1,
    title: 'Issue 1',
    description: 'This is the description for Issue 1.',
    contactInfo: 'Contact: email@example.com',
    status: 'pending',
    createdTimestamp: new Date('2024-04-11T12:00:00Z'),
    latestUpdateTimestamp: new Date('2024-04-11T12:00:00Z'),
  },
  {
    id: 2,
    title: 'Is',
    description: 'This is the description for Issue 2.',
    contactInfo: 'Contact: email@example.com',
    status: 'in progress',
    createdTimestamp: new Date('2024-04-10T08:30:00Z'),
    latestUpdateTimestamp: new Date('2024-04-10T08:30:00Z'),
  },
];

const Home: React.FC = () => {
  const [allTickets, setAllTickets] = useState<Ticket[]>(dummyTickets)


  useEffect(() => {
    const getAllTickets = async () => {
      try{
        const res = await ticketAPI.getAll();
        setAllTickets(res.data);
      }catch(error){
        console.error(error);
        alert('Failed to fetch tickets');
      }
    }
    getAllTickets();
  }, [])

  const onDragEnd = (result: DropResult) => {
    // Handle drag and drop logic here
    console.log(result);
  };

  return (


    <DragDropContext onDragEnd={onDragEnd}>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Dnd-kit Guide
      </Typography>
      <TicketBoard tickets={allTickets} />
      {/* <Button variant="contained" sx={{ mt: 2 }}>
        Add Container
      </Button> */}
    </Container>

  </DragDropContext>



  );
};

export default Home;
