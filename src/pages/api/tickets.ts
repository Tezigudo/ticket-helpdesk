import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description, contactInfo } = req.body;
    try {
      const ticket = await prisma.ticket.create({
        data: {
          title,
          description,
          contactInfo,
        },
      });
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error(error);
    }
  } else if(req.method ==='GET'){
      try{
        const tickets = await prisma.ticket.findMany({
          orderBy: {
            createdTimestamp: 'desc',
          },
        });
        console.log(tickets);
        res.status(200).json(tickets);
      }catch (error){
        res.status(500).json({ error: 'Internal Server Error' });
        console.error(error)
      
      }
  }
  
  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
