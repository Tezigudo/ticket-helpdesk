import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
} from "@mui/material";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { TicketCardProps } from "@/interfaces/TicketCard";
import TicketInfoModal from "./Modal/TicketInfoModal";

const TicketCard: React.FC<TicketCardProps> = ({ ticket, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Draggable draggableId={`${ticket.id}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Box
          sx={{ marginBottom: 1 }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <Card
            sx={{
              maxWidth: 345,
              display: "flex",
              alignItems: "center",
              p: 1,
              my: 1,
              borderRadius: 3,
              opacity: snapshot.isDragging ? 0.5 : 1,
              transform: snapshot.isDragging ? "rotate(-2deg)" : "",
              marginX: "4px"
            }}
            elevation={snapshot.isDragging ? 3 : 1}>
            <CardContent>
              <Typography variant="h5" component="div">
                {ticket.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ticket.contactInfo}
              </Typography>
              <Typography sx={{ fontSize: 10 }} color="text.secondary">
                {`id: ${ticket.id}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpenModal}>View Details</Button>
            </CardActions>
          </Card>
              <TicketInfoModal open={openModal} onClose={handleCloseModal} ticket={ticket} />
        </Box>
      )}
    </Draggable>
  );
};

export default TicketCard;
