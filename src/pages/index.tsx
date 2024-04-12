import React, { useState } from 'react';
import TicketCard from '@/components/TicketCard';
import { DragDropContext, DropResult} from 'react-beautiful-dnd';
import { Box, Typography, Button, Container } from '@mui/material';
import { Ticket } from '@prisma/client';
import TicketList from '@/components/TicketList';


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
    title: 'Issue 2',
    description: 'This is the description for Issue 2.',
    contactInfo: 'Contact: email@example.com',
    status: 'in progress',
    createdTimestamp: new Date('2024-04-10T08:30:00Z'),
    latestUpdateTimestamp: new Date('2024-04-10T08:30:00Z'),
  },
];

const Home: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>(dummyTickets)

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <TicketList title="Pending" tickets={tickets} />
        <TicketList title="Accepted" tickets={[]} />
        <TicketList title="Resolved" tickets={[]} />
        <TicketList title="Rejected" tickets={[]} />

      </Box>
      <Button variant="contained" sx={{ mt: 2 }}>
        Add Container
      </Button>
    </Container>
  </DragDropContext>

  //   <Container>
  //   <Grid container spacing={2}>
  //     {tickets.map((ticket, index) => (
  //       <Grid item xs={12} sm={6} md={4} key={ticket.id}>
  //         <TicketCard ticket={ticket} index={index}/>
  //       </Grid>
  //     ))}
  //   </Grid>
  // </Container>

  );
};

export default Home;
