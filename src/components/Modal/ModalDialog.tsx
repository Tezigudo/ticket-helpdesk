import { ModalDialogProps } from '@/interfaces/Modal'
import { Dialog } from '@mui/material'
import React from 'react'
import AddTicketForm from '../AddTicketForm'

const ModalDialog: React.FC<ModalDialogProps> = ({isOpen, onClose, onTicketAdded}) => {

  return (
    <Dialog open={isOpen} onClose={onClose}>
        <AddTicketForm handleClose={onClose} onTicketAdded={onTicketAdded}/>
    </Dialog>
  )
}

export default ModalDialog;