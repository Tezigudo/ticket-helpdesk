import React, { useState } from "react";
import { Button } from "@mui/material";
import ModalDialog from "./ModalDialog";
import { AddTicketButtonProps } from "@/interfaces/Button";

const AddTicketButton: React.FC<AddTicketButtonProps> = ({onTicketAdded}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        Add Ticket
      </Button>
      <ModalDialog isOpen={isOpen} onClose={handleClose} onTicketAdded={onTicketAdded}/>
    </>
  );
};

export default AddTicketButton;
