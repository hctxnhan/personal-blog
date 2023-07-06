import { FetchData } from "@/lib/fetch";
import { Post } from "./Post";

export interface Homepage {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: FetchData<Image>;
}

export interface Featured {
    title: string;
    subtitle: string;
    posts: FetchData<Post[]>;
}

export interface Gallery {
    title: string;
    subtitle: string;
    images: FetchData<Image[]>;
}

export interface Image {
    caption: string;
    width: number;
    height: number;
    url: string;
}