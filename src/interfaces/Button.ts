export interface AddTicketButtonProps {
  onTicketAdded: () => void;
}

export interface SortButtonProps {
  sortMode: "asc" | "desc";
  onSortChange: (mode: "asc" | "desc") => void;
}
