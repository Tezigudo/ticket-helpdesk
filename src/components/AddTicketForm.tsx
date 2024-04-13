import { AddTicketFormProps } from "@/interfaces/Form";
import { Button, TextField, styled } from "@mui/material";


const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: "1rem",
    width: "300px",
}));

const AddTicketForm: React.FC<AddTicketFormProps> = ({ handleClose }) => {
    const handleSubmit = ()=>{}
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-8">
      <StyledTextField label="Title" variant="filled" required />
      <StyledTextField label="Description" variant="filled" required />
      <StyledTextField label="Contact Info" variant="filled" required />
      <div>
        <Button variant="contained">Cancel</Button>
        <Button variant="contained" color="primary" type="submit">Add Ticket</Button>
      </div>
    </form>
  );
};

export default AddTicketForm;
