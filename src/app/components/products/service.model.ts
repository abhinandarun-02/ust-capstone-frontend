export interface Service {
    title: string;
    about: string;
    products: Product[]
}

interface Product {
    name: string;
    price: number;
    location: string;
    about: string;
    rating: number;
    tier: string;
    contact: string;
    details?: string;
    capacity?:number;
    address?: string
}