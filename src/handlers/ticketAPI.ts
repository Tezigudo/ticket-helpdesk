'use client'
import { TicketCreateBody, TicketUpdateBody } from "@/interfaces/Ticket";
import axiosClient from "@/lib/axiosClient";


const ticketAPI = {
    getAll: ()=> axiosClient.get("/tickets"),
    getOne: (id: number) => axiosClient.get(`/tickets/${id}`),
    update: (id: number, data: TicketUpdateBody) => axiosClient.put(`/tickets/${id}`, data),
    createTicket: (data: TicketCreateBody) => axiosClient.post("/tickets", data),
};

export default ticketAPI;