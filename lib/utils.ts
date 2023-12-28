import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now: Date = new Date();
  const diffInSeconds: number = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} sec ago`;
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return `${diffInMinutes} min ago`;
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return `${diffInHours} hour ago`;
  } else if (diffInSeconds < 2592000) { // 30 days
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 31536000) { // 365 days
    const diffInMonths = Math.floor(diffInSeconds / 2592000);
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  } else {
    const diffInYears = Math.floor(diffInSeconds / 31536000);
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  }
}

export const formatNumber = (num: number): string => {
  const formatter = new Intl.NumberFormat('en', { notation: "compact" })
  return formatter.format(num)
}