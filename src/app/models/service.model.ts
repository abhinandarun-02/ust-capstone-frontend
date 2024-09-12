import { Catering } from "./catering.model";
import { Photography } from "./photography.model";
import { Venue } from "./venue.model";

export interface Service {
    id: number;
    type: string;
    weddingId: number;
    cateringId?: number;
    photographyId?: number;
    venueId?: number;
    cateringDetails?: Catering;
    photographyDetails?: Photography;
    venueDetails?: Venue;
}