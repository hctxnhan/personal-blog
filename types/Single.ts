import { FetchData } from "@/lib/fetch";

export interface Homepage {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: FetchData<Image>;
}

export interface Image {
    caption: string;
    width: number;
    height: number;
    url: string;
}