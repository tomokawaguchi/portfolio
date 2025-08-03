import { ReactElement } from "react";

export interface defaultProject {
  id: number;
  title: string;
  projectType: string;
  techStack: string[];
  github: string;
  liveSite: string;
  content: string;
  features: string[];
  image: string;
  isFeatured: boolean;
}

export interface ProjectCardProps {
  data: defaultProject;
}

export interface NavProps {
  navFor: string;
  isDesktop: boolean;
  isMobileActive: boolean;
  handleClick?: () => void;
}

export interface LinkButtonProps {
  buttonType: "arrow-right" | "arrow-left";
  buttonText: string;
  linkTo?: string;
}

export interface AboutFeatureProps {
  icon: ReactElement;
  title: string;
  content: string;
}

export interface SocialsProps {
  socialsFor: string;
  isDesktop: boolean;
  isMobileActive: boolean;
}

export interface TagProps {
  tagText: string;
  addSrOnlyText?: boolean;
}
