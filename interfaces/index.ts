import { ReactNode } from "react";

export interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

export interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

export interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

export type CallLayoutType = "grid" | "speaker-left" | "speaker-right";
