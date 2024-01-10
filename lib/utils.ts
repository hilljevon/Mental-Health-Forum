import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function extractZtName(path: string) {
  const regex = /\/[^\/]+\/([^\/]+)\//;
  const match = path.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}