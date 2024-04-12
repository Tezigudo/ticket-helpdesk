export interface Ticket{
    id: number;
    title: string;
    description: string;
    contactInfo: string;
    status: string;
    latestUpdateTimestamp: Date;
    createdTimestamp: Date;
}
