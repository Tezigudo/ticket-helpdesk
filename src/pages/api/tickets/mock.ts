import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const tickets = [
    {
      title: "Issue with login",
      description: "Unable to login to the system.",
      contactInfo: "1234567890",
    },
    {
      title: "Network connectivity problem",
      description: "Unable to connect to the internet.",
      contactInfo: "2345678901",
    },
    {
      title: "Software crash",
      description: "Application crashes when performing a certain action.",
      contactInfo: "3456789012",
    },
    {
      title: "Printer not working",
      description: "Printer is not responding to print commands.",
      contactInfo: "4567890123",
    },
    {
      title: "Email delivery issue",
      description: "Emails are not being delivered to recipients.",
      contactInfo: "5678901234",
    },
    {
      title: "File access permission error",
      description: "Cannot access certain files due to permission issues.",
      contactInfo: "6789012345",
    },
    {
      title: "Slow system performance",
      description: "System is running slow and unresponsive.",
      contactInfo: "7890123456",
    },
    {
      title: "Database connection problem",
      description: "Unable to establish connection to the database server.",
      contactInfo: "8901234567",
    },
    {
      title: "UI layout issue",
      description: "Elements are misaligned on the user interface.",
      contactInfo: "9012345678",
    },
    {
      title: "Missing data",
      description: "Certain data is missing from the system.",
      contactInfo: "0123456789",
    },
  ];

  if (req.method == "GET") {
    try {
      const resp = await prisma.ticket.createMany({
        data: tickets,
      });
      if (resp) {
        res.status(200).json({
          messaage: "Tickets created successfully",
          data: tickets,
        });
      } else {
        res.status(500).json({
          message: "Failed to create tickets",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
      console.error(error);
    }
  }
}
