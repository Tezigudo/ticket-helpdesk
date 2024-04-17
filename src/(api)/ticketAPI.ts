'use client'
import { TicketCreateBody, TicketUpdateBody } from "@/interfaces/Ticket";
import axios from "axios";

axios.defaults.baseURL = "/api"


const ticketAPI = {
    getAll: async ()=> await axios.get("/tickets"),
    getOne: async (id: number) => await axios.get(`/tickets/${id}`),
    update: async (id: number, data: TicketUpdateBody) => await axios.put(`/tickets/${id}`, data),
    createTicket: async (data: TicketCreateBody) => await axios.post("/tickets", data),
};

export default ticketAPI;
