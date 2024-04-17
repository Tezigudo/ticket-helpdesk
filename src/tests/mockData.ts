export const mockTicket = {
    id: 1,
    title: 'Test Ticket',
    description: 'This is a test ticket',
    contactInfo: 'test@example.com',
    status: 'pending',
    latestUpdateTimestamp: new Date().toISOString(),
    createdTimestamp: new Date('2024-04-16T12:00:00Z').toISOString() // Sample created timestamp
  };
  
  export const mockTickets = [
    mockTicket,
  ];

  