import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const APP_STORE_URL = "https://apps.apple.com/us/app/anglican-hymnal/id6755648517";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.kobby.hymnal";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStoreUrl() {
  if (typeof window === 'undefined') return APP_STORE_URL;

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  if (/android/i.test(userAgent)) {
    return PLAY_STORE_URL;
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return APP_STORE_URL;
  }

  return APP_STORE_URL;
}
