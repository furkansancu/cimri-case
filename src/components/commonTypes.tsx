export interface ProductType {
    id: number;
    title: string;
    merchantCount: number;
    brand: {
        name: string
    };
    topOffers: {
        id: number;
        price: number;
        merchant: {
            id: number;
            name: string;
            url: string;
            logo: string;
        }
    }[];
    imageUrl: string;
}