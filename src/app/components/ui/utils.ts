import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useMemo } from 'react';

const APP_STORE_URL = "https://apps.apple.com/app/anglican-hymnal/id123456789";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.anglican.hymnal";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useOS() {
  return useMemo(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      return PLAY_STORE_URL;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      return APP_STORE_URL;
    } else {
      return APP_STORE_URL;
    }
  }, []);
}
