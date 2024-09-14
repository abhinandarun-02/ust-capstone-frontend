import { Catering } from "./catering.model";
import { Photography } from "./photography.model";
import { Venue } from "./venue.model";

export interface Service {
    id: number;
    type: string;
    weddingId: number;
    weddingName: string;
    cateringName?: string;
    photographyName?: string;
    venueName?: string;
    cateringDetails?: Catering;
    photographyDetails?: Photography;
    venueDetails?: Venue;
}