import { AddTicketFormProps } from "@/interfaces/Form";
import { Button, TextField } from "@mui/material";

const AddTicketForm: React.FC<AddTicketFormProps> = ({ handleClose }) => {
  return (
    <form>
      <TextField label="Title" variant="filled" required />
      <TextField label="Description" variant="filled" required />
      <TextField label="Contact Info" variant="filled" required />
      <div>
        <Button variant="contained">Cancel</Button>
        <Button variant="contained" color="primary" type="submit">Add Ticket</Button>
      </div>
    </form>
  );
};

export default AddTicketForm;
