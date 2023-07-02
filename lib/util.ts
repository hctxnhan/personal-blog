import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { environment } from './environment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructUrl(url: string, root = false) {
  return root ? `${environment.api.root}${url}` : `${environment.api.url}${url}`;
}
