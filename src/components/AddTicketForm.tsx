import ticketAPI from "@/handlers/ticketAPI";
import { AddTicketFormProps } from "@/interfaces/Form";
import { Button, Container, TextField, Typography, styled } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const AddTicketForm: React.FC<AddTicketFormProps> = ({ handleClose, onTicketAdded }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent) => {

    e.preventDefault();
    try {
        // const res = await ticketAPI.createTicket({ title, description, contactInfo });
        const res = await axios.post("/api/tickets", { title, description, contactInfo })
        if(res.status === 201) {
        alert("Ticket added successfully")
        onTicketAdded()
        ;} else {
            alert("Failed to add ticket");
        }
        console.log(res.data);
      } catch (e) {
        console.error(e);
        alert("Failed to add ticket");
      }
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-5">
      <Typography variant="h4" component="h5">Add Ticket</Typography>
      <StyledTextField
        label="Title"
        variant="filled"
        required
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <StyledTextField
        label="Description"
        variant="filled"
        required
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
      />
      <StyledTextField
        label="Contact Info"
        variant="filled"
        required
        value={contactInfo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactInfo(e.target.value)}
      />
      <Container sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Button
          variant="contained"
          sx={{
            margin: "2rem",
          }}
          onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit" sx={{
          margin: "2rem",
        }}>
          Add Ticket
        </Button>
      </Container>
    </form>
  );
};

export default AddTicketForm;
