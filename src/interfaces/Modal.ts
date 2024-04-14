import { Ticket } from "@prisma/client";

export interface ModalDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onTicketAdded: () => void;
}

export interface TicketInfoModalProps {
    open: boolean;
    onClose: () => void;
    ticket: Ticket;
}