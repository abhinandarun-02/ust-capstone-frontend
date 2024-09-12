import { CreateCatering } from "./create.catering.model";
import { CreatePhotography } from "./create.photography.model";
import { CreateVenue } from "./create.venue.model";

export interface CreateService {
    type: string;
    weddingId: number;
    cateringId?: number;
    photographyId?: number;
    venueId?: number;
    cateringDetails?: CreateCatering;
    photographyDetails?: CreatePhotography;
    venueDetails?: CreateVenue;
}