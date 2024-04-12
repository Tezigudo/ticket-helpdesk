import { Ticket } from "@prisma/client";


export interface TicketCardProps {
    ticket: Ticket;
    index: number;
  }