import { Ticket } from "@prisma/client";

export interface TicketListProps{
    title: string;
    tickets: Ticket[];
}