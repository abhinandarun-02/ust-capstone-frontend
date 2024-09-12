export interface Service {
    title: string;
    about: string;
    products: Product[]
}

interface Product {
    title: string;
    image: string;
    about: string;
    location: string;
    price: number;
}