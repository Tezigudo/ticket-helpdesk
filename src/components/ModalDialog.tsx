import { ModalDialogProps } from '@/interfaces/ModalDialog'
import { Dialog } from '@mui/material'
import React from 'react'
import AddTicketForm from './AddTicketForm'

const ModalDialog: React.FC<ModalDialogProps> = ({isOpen, onClose}) => {


  return (
    <Dialog open={isOpen} onClose={onClose}>
        <AddTicketForm handleClose={onClose}/>
    </Dialog>
  )
}

export default ModalDialog;