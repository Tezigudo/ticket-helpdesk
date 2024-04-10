import React from 'react';
import TicketForm from '../components/TicketForm';
import KanbanBoard, { Ticket } from '@/components/Board';
import { ticket } from '@/interfaces/Ticket';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


const Home: React.FC = () => {
  const tickets: Ticket[] = [
    // Sample ticket data
    { id: 1, title: 'Ticket 1', status: 'pending' },
    { id: 2, title: 'Ticket 2', status: 'accepted' },
    { id: 3, title: 'Ticket 3', status: 'resolved' },
    { id: 4, title: 'Ticket 4', status: 'rejected' },
    { id: 5, title: 'Ticket 5', status: 'pending' },
    { id: 6, title: 'Ticket 6', status: 'accepted' },
    { id: 7, title: 'Ticket 7', status: 'resolved' },
    { id: 8, title: 'Ticket 8', status: 'rejected' },
  ];
  
  return (
    <div className={`mx-auto max-w-7xl py-10 ${inter.className}`}>
      <div className='flex items-center justify-between gap-y-2'>
      <h1 className='text-grey-800 text-3xl font-bold'>Helpdesk Support Ticket Management</h1>

      </div>
      {/* <TicketForm /> */}
      <KanbanBoard tickets={tickets}/>
    </div>
  );
};

export default Home;
