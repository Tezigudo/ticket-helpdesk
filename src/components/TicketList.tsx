import { TicketListProps } from '@/interfaces/TicketList';
import { Droppable, DraggableProvided} from 'react-beautiful-dnd';
import { Box, Typography, Button} from '@mui/material';
import TicketCard from './TicketCard';


const TicketList = ({ title, tickets }: TicketListProps) => (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Droppable droppableId={title} type="TODO">
        {(provided: DraggableProvided, snapshot: DraggableProvided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              backgroundColor: snapshot.isDraggingOver ? 'grey.200' : 'white',
              p: 1,
              border: '1px solid grey',
              borderRadius: 1,
            }}
          >
            {tickets.map((ticket, index) => (
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
  );

export default TicketList;