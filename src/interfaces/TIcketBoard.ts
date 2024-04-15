import { Ticket } from "@prisma/client";

export interface TicketBoardProps{
    tickets: Ticket[];
    onTicketUpdate: () => void;
}