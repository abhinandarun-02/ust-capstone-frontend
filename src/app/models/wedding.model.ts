import { Service } from "./service.model";

export interface Wedding {
    id: number;
    name: string;
    date: string;
    guestCount: number;
    location: string;
    plannerUsername: string;
    plannerId: string;
    budget: string;
    services: Service[]
}