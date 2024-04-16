import { TicketStatus } from "@/enums/TicketStatus";

export function getTicketBgColor(status: TicketStatus) {
  switch (status.toLocaleLowerCase()) {
    case TicketStatus.PENDING:
      return "#FFD180";
    case TicketStatus.ACCEPTED:
      return "#A5D6A7";
    case TicketStatus.RESOLVED:
      return "#81D4FA";
    case TicketStatus.REJECTED:
      return "#FF8080";
    default:
      return "#EF9A9A";
  }
}