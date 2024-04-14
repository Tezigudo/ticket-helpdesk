import React from 'react'
import {
  Typography,
  Button,
  Modal,
  Box,
  Divider,
  Container,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { TicketInfoModalProps } from '@/interfaces/Modal';


const TicketInfoModal: React.FC<TicketInfoModalProps> = ({openModal, handleCloseModal, ticket}) => {
  return (
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
        borderRadius: 3,
      }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 0,
        }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {ticket.title}
        </Typography>
        <IconButton>
          <EditIcon onClick={() => console.log("eiei")} />
        </IconButton>
      </Container>
      <Divider
        sx={{
          marginBottom: 2,
        }}
      />
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
  )
}

export default TicketInfoModal