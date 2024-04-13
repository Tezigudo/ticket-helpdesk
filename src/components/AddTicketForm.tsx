import { AddTicketFormProps } from "@/interfaces/Form";
import { Button, TextField, styled } from "@mui/material";
import { useState } from "react";


const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: "1rem",
    width: "300px",
}));

const AddTicketForm: React.FC<AddTicketFormProps> = ({ handleClose }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [contactInfo, setContactInfo] = useState<string>("");

    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault();
        console.log(title, description, contactInfo);
        handleClose();
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-8">
      <StyledTextField label="Title" variant="filled" required value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)}/>
      <StyledTextField label="Description" variant="filled" required value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setDescription(e.target.value)}/>
      <StyledTextField label="Contact Info" variant="filled" required value={contactInfo} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setContactInfo(e.target.value)}/>
      <div>
        <Button variant="contained" sx={{
            margin: "2rem"
        }}>Cancel</Button>
        <Button variant="contained" color="primary" type="submit">Add Ticket</Button>
      </div>
    </form>
  );
};

export default AddTicketForm;
