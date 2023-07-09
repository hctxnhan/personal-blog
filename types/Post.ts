import { DataSingle } from "@/lib/fetch";
import { Image } from "./Single";
import { Category } from "./Category";

export interface Post {
  content: string;
  title: string;
  thumbnail: DataSingle<Image>;
  label: DataSingle<Category>;
  slug: string;
}
