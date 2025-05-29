import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FancyColorVariants = {
  purple: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/40",
    text: "text-purple-400",
    icon: "text-purple-400",
  },
  blue: {
    bg: "bg-blue-500/20",
    border: "border-blue-500/40",
    text: "text-blue-400",
    icon: "text-blue-400",
  },
  green: {
    bg: "bg-green-500/20",
    border: "border-green-500/40",
    text: "text-green-400",
    icon: "text-green-400",
  },
  red: {
    bg: "bg-red-500/20",
    border: "border-red-500/40",
    text: "text-red-400",
    icon: "text-red-400",
  },
  yellow: {
    bg: "bg-yellow-500/20",
    border: "border-yellow-500/40",
    text: "text-yellow-400",
    icon: "text-yellow-400",
  },
  orange: {
    bg: "bg-orange-500/20",
    border: "border-orange-500/40",
    text: "text-orange-400",
    icon: "text-orange-400",
  },
  teal: {
    bg: "bg-teal-500/20",
    border: "border-teal-500/40",
    text: "text-teal-400",
    icon: "text-teal-400",
  },
  pink: {
    bg: "bg-pink-500/20",
    border: "border-pink-500/40",
    text: "text-pink-400",
    icon: "text-pink-400",
  },
  gray: {
    bg: "bg-gray-500/20",
    border: "border-gray-500/40",
    text: "text-gray-400",
    icon: "text-gray-400",
  },
};
