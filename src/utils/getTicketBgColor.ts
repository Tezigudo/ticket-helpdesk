import { TicketStatus } from "@/enums/TicketStatus";

export function getTicketBgColor(status: TicketStatus) {
  switch (status.toLocaleLowerCase()) {
    case TicketStatus.PENDING:
      return "#E0E0E0";
    case TicketStatus.ACCEPTED:
      return "#DCEDC8";
    case TicketStatus.RESOLVED:
      return "#E3F2FD";
    case TicketStatus.REJECTED:
      return "#FFCDD2";
    default:
      return "#EF9A9A";
  }
}
