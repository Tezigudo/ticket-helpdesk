import React from 'react';
import DndKitGuide from '@/components/sth';
import TicketForm from '@/components/TicketForm';


// const tickets = [
//   {
//     id: 1,
//     title: 'Issue 1',
//     description: 'This is the description for Issue 1.',
//     contactInfo: 'Contact: email@example.com',
//     status: 'pending',
//     createdTimestamp: new Date('2024-04-11T12:00:00Z'),
//     latestUpdateTimestamp: new Date('2024-04-11T12:00:00Z'),
//   },
//   {
//     id: 2,
//     title: 'Issue 2',
//     description: 'This is the description for Issue 2.',
//     contactInfo: 'Contact: email@example.com',
//     status: 'in progress',
//     createdTimestamp: new Date('2024-04-10T08:30:00Z'),
//     latestUpdateTimestamp: new Date('2024-04-10T08:30:00Z'),
//   },
// ];

const Home: React.FC = () => {
  return (
  //   <div className={`mx-auto max-w-7xl py-10`}>
  //     <div className='flex items-center justify-between gap-y-2'>
  //     <h1 className='text-grey-800 text-3xl font-bold'>Helpdesk Support Ticket Management</h1>

  //     </div>
  //     <TicketForm />
  //   </div>
    <DndKitGuide/>
  //   <Container>
  //   <Grid container spacing={2}>
  //     {tickets.map((ticket) => (
  //       <Grid item xs={12} sm={6} md={4} key={ticket.id}>
  //         <TicketCard ticket={ticket} />
  //       </Grid>
  //     ))}
  //   </Grid>
  // </Container>

  );
};

export default Home;
