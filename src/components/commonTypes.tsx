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

export interface FilterType {
    name: string;
    type: string;
    value: string | boolean | number[];
    active: boolean;
}

export interface GlobalStatesType {
    products: {
        all: ProductType[];
        filtered: ProductType[];
        filters: FilterType[];
    };
}