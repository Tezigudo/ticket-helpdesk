'use client'
import { TicketCreateBody, TicketUpdateBody } from "@/interfaces/Ticket";
import axios from "axios";



const ticketAPI = {
    getAll: async ()=> await axios.get("/api/tickets"),
    getOne: async (id: number) => await axios.get(`/api/tickets/${id}`),
    update: async (id: number, data: TicketUpdateBody) => await axios.put(`/api/tickets/${id}`, data),
    createTicket: async (data: TicketCreateBody) => await axios.post("/api/tickets", data),
};

export default ticketAPI;