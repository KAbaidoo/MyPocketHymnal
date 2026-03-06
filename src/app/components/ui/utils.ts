import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const APP_STORE_URL = "https://apps.apple.com/us/app/anglican-hymnal/id6755648517";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
