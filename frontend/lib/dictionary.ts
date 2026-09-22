import { en } from "@/content/en";
import { de } from "@/content/de";

export function getDictionary(locale: string) {
  return locale === "de" ? de : en;
}