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

export interface ButtonProps {
	buttonType?: string;
	buttonText: string;
	linkTo?: string;
}

export interface AboutFeatureProps {
	iconType: string;
	headingNumber: string;
	headingUnit: string;
	paraText: string;
}

export interface SocialsProps {
	socialsFor: string;
	isDesktop: boolean;
	isMobileActive: boolean;
}

export interface TagProps {
	tagText: string;
}
