import { IPicture } from "../../../types";
import { getStrapiURL } from "./";

export function getStrapiMedia(media: IPicture) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}