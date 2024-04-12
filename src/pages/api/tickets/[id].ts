import { TicketStatus } from "@/enums/TicketStatus";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

  if (req.method === "GET") {
    try {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (ticket) {
        res.status(200).json(ticket);
      } else {
        res.status(404).json({ error: "Ticket not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method == "PUT") {
    const { title, description, contactInfo, status } = req.body;

    try {
      // Construct the data object for updating the ticket
      const dataToUpdate: any = {}; // Define dataToUpdate as any type for flexibility

      if (title !== undefined) {
        dataToUpdate.title = title;
      }
      if (description !== undefined) {
        dataToUpdate.description = description;
      }
      if (contactInfo !== undefined) {
        dataToUpdate.contactInfo = contactInfo;
      }
      if (status !== undefined) {
        if(!Object.values(TicketStatus).includes(status)){
            return res.status(400).json({ error: "Invalid Ticket Status" });
        }
        dataToUpdate.status = status;
      }

      // Add latestUpdateTimestamp
      dataToUpdate.latestUpdateTimestamp = new Date();

      // Update the ticket in the database
      const updatedTicket = await prisma.ticket.update({
        where: {
          id: Number(id), // Convert id to number assuming it's numeric
        },
        data: dataToUpdate,
      });

      res.status(200).json(updatedTicket);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
