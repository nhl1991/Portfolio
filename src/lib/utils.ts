import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Locale, SUPPORTED_LOCALES } from "./interface"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale)
}