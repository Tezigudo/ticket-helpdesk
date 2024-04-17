import { createMocks } from "node-mocks-http";
import handler from "@/pages/api/tickets/[id]";
// import * as prismaMock from "@/lib/prisma";
// import { NextApiRequest, NextApiR/esponse } from "next";
import { describe, test, expect } from "@jest/globals";

// jest.mock('@/lib/prisma', () => ({
//     ...prismaMock,
//   }));

describe("/api/tickets/[id]", () => {
  test("GET /api/tickets/[id] returns 200", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "1",
      },
    });
    await handler(req, res);
    try {
      expect(res._getStatusCode()).toBe(200);
    } catch (err) {
      if (res._getStatusCode() == 404) {
        console.error("Ticket not found");
      } else if (res._getStatusCode() == 500) {
        console.error("Please Migrate data first");
      } else {
        console.log(err);
      }
      throw err;
    }
  });
});

// describe('API handler for [id].ts', () => {
//     let mockRequest: Partial<NextApiRequest>;
//     let mockResponse: Partial<NextApiResponse>;

//     beforeEach(() => {
//       mockRequest = {};
//       mockResponse = {
//         status: jest.fn(() => mockResponse),
//         json: jest.fn(),
//       } as any;
//     });

//     afterEach(() => {
//       jest.clearAllMocks();
//     });

//     test('GET method should return ticket if found', async () => {
//         const mockTicket = { id: 1, title: 'Test Ticket' };
//         const mockQuery = { id: '1' };
//         (mockRequest as NextApiRequest).query = mockQuery;
//         (prismaMock.ticket.findUnique as jest.Mock).mockResolvedValueOnce(mockTicket);

//         await handler(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

//         expect(prismaMock.ticket.findUnique).toHaveBeenCalledWith({
//           where: { id: 1 },
//         });
//         expect(mockResponse.status).toHaveBeenCalledWith(200);
//         expect(mockResponse.json).toHaveBeenCalledWith(mockTicket);
//       });
// })
