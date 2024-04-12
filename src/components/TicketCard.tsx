import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Modal, Box, Divider, Container } from "@mui/material";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { TicketCardProps } from "@/interfaces/TicketCard";

const TicketCard: React.FC<TicketCardProps> = ({ ticket, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableProvided) => (
      
            <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{
              opacity: snapshot.isDragging ? 0.5 : 1 
            }}
            >
          <Card sx={{ maxWidth: 345,
            display: 'flex',
            alignItems: 'center',
            p: 1,
            my: 1,
            borderRadius: 3,
           }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {ticket.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ticket.contactInfo}
              </Typography>
              <Button onClick={handleOpenModal}>View Details</Button>
            </CardContent>
          </Card>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {ticket.title}
              </Typography>
              <Divider />
              <Typography variant="body1" gutterBottom>
                Description: {ticket.description}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Contact Info: {ticket.contactInfo}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Status: {ticket.status}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Created Timestamp: {ticket.createdTimestamp.toLocaleString()}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Latest Update Timestamp: {ticket.latestUpdateTimestamp.toLocaleString()}
              </Typography>
              <Button onClick={handleCloseModal}>Close</Button>
            </Box>
          </Modal>
          </Container>
      )}
     </Draggable>
  );
};

export default TicketCard;
