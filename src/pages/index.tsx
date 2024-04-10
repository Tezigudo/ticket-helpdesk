import React from 'react';
import TicketForm from '../components/TicketForm';
import KanbanBoard, { Ticket } from '@/components/Board';
import { ticket } from '@/interfaces/Ticket';

const Home: React.FC = () => {
  
  return (
    <div>
      <h1>Helpdesk Support Ticket Management</h1>
      {/* <TicketForm /> */}
    </div>
  );
};

export default Home;
