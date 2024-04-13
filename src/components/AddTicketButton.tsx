import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ModalDialog from "./ModalDialog";

const AddTicketButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () =>{
    setIsOpen(true);
  }

  const handleClose = () =>{
    setIsOpen(false);
  }



  return (

    <>
    <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
          Add Ticket
        </Button>
        <ModalDialog isOpen={isOpen} onClose={handleClose}/>
        </>
  );
};

export default AddTicketButton;
