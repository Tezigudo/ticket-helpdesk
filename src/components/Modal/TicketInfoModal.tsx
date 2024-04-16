import React, { ChangeEvent, useState } from "react";
import { Typography, Button, Modal, Box, Divider, IconButton, Grid, TextField, Select, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { TicketInfoModalProps } from "@/interfaces/Modal";
import { TicketStatus } from "@/enums/TicketStatus";
import ticketAPI from "@/handlers/ticketAPI";
import { showSuccessAlert } from "@/utils/showAlert";
import { convertISOToReadableTime } from "@/utils/convertDate";

const TicketInfoModal: React.FC<TicketInfoModalProps> = ({ open, onClose, ticket, onTicketUpdate }) => {
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({
    description: false,
    contactInfo: false,
    status: false,
  });

  const [updatedValues, setUpdatedValues] = useState<{ [key: string]: string }>({
    description: ticket.description,
    contactInfo: ticket.contactInfo,
    status: ticket.status,
  });

  const handleEditClick = (field: string) => {
    setEditMode((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUpdatedValues((prevState) => ({ ...prevState, [field]: e.target.value }));
  };

  const handleSaveClick = async (field: string) => {
    setEditMode((prevState) => ({ ...prevState, [field]: false }));
    await ticketAPI.update(ticket.id, { [field]: updatedValues[field] });
    showSuccessAlert("Ticket updated successfully");
    onTicketUpdate();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minwidth: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {ticket.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Description: 
              </Typography>
            </Grid>
            <Grid item xs>
              {editMode.description ? (
                <TextField
                  fullWidth
                  value={updatedValues.description}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "description")}
                  multiline
                />
              ) : (
                <Typography variant="body1">{ticket.description}</Typography>
              )}
            </Grid>
            <Grid item>
              {editMode.description ? (
                <Button onClick={() => handleSaveClick("description")}>Save</Button>
              ) : (
                <IconButton onClick={() => handleEditClick("description")}>
                  <EditIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Contact Info:
              </Typography>
            </Grid>
            <Grid item xs>
              {editMode.contactInfo ? (
                <TextField
                  fullWidth
                  value={updatedValues.contactInfo}
                  onChange={(e) => handleInputChange(e, "contactInfo")}
                />
              ) : (
                <Typography variant="body1">{ticket.contactInfo}</Typography>
              )}
            </Grid>
            <Grid item>
              {editMode.contactInfo ? (
                <Button onClick={() => handleSaveClick("contactInfo")}>Save</Button>
              ) : (
                <IconButton onClick={() => handleEditClick("contactInfo")}>
                  <EditIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Status:
              </Typography>
            </Grid>
            <Grid item xs>
              {editMode.status ? (
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={updatedValues.status}
                  onChange={(e) => handleInputChange(e, "status")}>
                  {Object.values(TicketStatus).map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                <Typography variant="body1">{ticket.status}</Typography>
              )}
            </Grid>
            <Grid item>
              {editMode.status ? (
                <Button onClick={() => handleSaveClick("status")}>Save</Button>
              ) : (
                <IconButton onClick={() => handleEditClick("status")}>
                  <EditIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} container direction="row" alignItems="center">
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Created Timestamp: 
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{convertISOToReadableTime(ticket.createdTimestamp.toLocaleString())}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container direction="row" alignItems="center">
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Latest Update Timestamp: 
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{convertISOToReadableTime(ticket.latestUpdateTimestamp.toLocaleString())}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={onClose}>Close</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default TicketInfoModal;
