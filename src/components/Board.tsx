import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';

export interface Ticket {
  id: number;
  title: string;
  status: 'pending' | 'accepted' | 'resolved' | 'rejected';
}

interface KanbanBoardProps {
  tickets: Ticket[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tickets }) => {
  const [pendingTickets, setPendingTickets] = useState<Ticket[]>(tickets.filter(ticket => ticket.status === 'pending'));
  const [acceptedTickets, setAcceptedTickets] = useState<Ticket[]>(tickets.filter(ticket => ticket.status === 'accepted'));
  const [resolvedTickets, setResolvedTickets] = useState<Ticket[]>(tickets.filter(ticket => ticket.status === 'resolved'));
  const [rejectedTickets, setRejectedTickets] = useState<Ticket[]>(tickets.filter(ticket => ticket.status === 'rejected'));

  const handleUpdateTicket = (id: number, status: 'accepted' | 'resolved' | 'rejected') => {
    // Here, you would implement the logic to update the ticket status in the backend
    // After updating the status, you would update the corresponding state based on the new status
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper elevation={10}>
            <Typography variant="h6" align="center">Pending</Typography>
            {pendingTickets.map(ticket => (
              <Paper key={ticket.id}>
                <Typography>{ticket.title}</Typography>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'accepted')}>Accept</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'resolved')}>Resolve</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'rejected')}>Reject</Button>
              </Paper>
            ))}
          </Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper>
            <Typography variant="h6" align="center">Accept</Typography>
            {pendingTickets.map(ticket => (
              <Paper key={ticket.id}>
                <Typography>{ticket.title}</Typography>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'accepted')}>Accept</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'resolved')}>Resolve</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'rejected')}>Reject</Button>
              </Paper>
            ))}
          </Paper>
        </Grid> */}
        {/* <Grid item xs={3}>
          <Paper>
            <Typography variant="h6" align="center">Pending</Typography>
            {pendingTickets.map(ticket => (
              <Paper key={ticket.id}>
                <Typography>{ticket.title}</Typography>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'accepted')}>Accept</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'resolved')}>Resolve</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'rejected')}>Reject</Button>
              </Paper>
            ))}
          </Paper>
        </Grid> */}
        {/* <Grid item xs={3}>
          <Paper>
            <Typography variant="h6" align="center">Pending</Typography>
            {pendingTickets.map(ticket => (
              <Paper key={ticket.id}>
                <Typography>{ticket.title}</Typography>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'accepted')}>Accept</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'resolved')}>Resolve</Button>
                <Button onClick={() => handleUpdateTicket(ticket.id, 'rejected')}>Reject</Button>
              </Paper>
            ))}
          </Paper>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default KanbanBoard;
