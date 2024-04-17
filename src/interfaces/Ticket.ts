export interface TicketCreateBody {
  title: string;
  description: string;
  contactInfo: string;
}

export interface TicketUpdateBody {
  title?: string;
  description?: string;
  contactInfo?: string;
  status?: string;
}
