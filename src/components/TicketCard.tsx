import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  IconButton,
} from "@mui/material";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { TicketCardProps } from "@/interfaces/TicketCard";
import TicketInfoModal from "./Modal/TicketInfoModal";
import VisibilityIcon from "@mui/icons-material/Visibility";

const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  index,
  onTicketUpdate,
}) => {
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
          ref={provided.innerRef}
        >
          <Card
            sx={{
              maxWidth: 345,
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              my: 1,
              borderRadius: 3,
              opacity: snapshot.isDragging ? 0.5 : 1,
              transform: snapshot.isDragging ? "rotate(-2deg)" : "",
              marginX: "3px",
            }}
            elevation={snapshot.isDragging ? 3 : 1}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {ticket.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Contact: ${ticket.contactInfo}`}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {`id: ${ticket.id}`}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={handleOpenModal}>
                <VisibilityIcon color="primary" />
              </IconButton>
            </CardActions>
          </Card>
          <TicketInfoModal
            open={openModal}
            onClose={handleCloseModal}
            ticket={ticket}
            onTicketUpdate={onTicketUpdate}
          />
        </Box>
      )}
    </Draggable>
  );
};

export default TicketCard;
