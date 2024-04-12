import { TicketListProps } from '@/interfaces/TicketList';
import { Droppable, DraggableProvided} from 'react-beautiful-dnd';
import { Box, Typography, Button} from '@mui/material';
import TicketCard from './TicketCard';
import { useEffect, useState } from 'react';
import { Ticket } from '@prisma/client/edge';


const TicketList = ({ title, tickets }: TicketListProps) => {
    const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);

    useEffect(() => {
    setFilteredTickets(tickets.filter((ticket) => ticket.status === title.toLowerCase()));
    }, [tickets])


    return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Droppable droppableId={title} type="TODO">
        {(provided: DraggableProvided, snapshot: DraggableProvided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              backgroundColor: snapshot.isDraggingOver ? 'grey.200' : 'grey.100',
              p: 1,
              borderRadius: 3,
              height: '70%',
            width: '400',
            }}
          >
            {filteredTickets.map((ticket, index) => (
              <TicketCard key={index} ticket={ticket} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <Button variant="contained" sx={{ mt: 1 }}>
        Add Item
      </Button>
    </Box>
  );}

export default TicketList;