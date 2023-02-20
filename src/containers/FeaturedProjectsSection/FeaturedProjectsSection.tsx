import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./FeaturedProjectsSection.module.css";
import { projects } from "../../assets/data/contents.js";
import { useEffect, useState } from "react";
import { defaultProject } from "../../types";

const FeaturedProjectsSection = () => {
	const [featuredProjects, setFeaturedProjects] = useState<defaultProject[]>([]);

	useEffect(() => {
		// Filter the data --> only showcase the 'isFeatured' marked as true and 5 items
		let featured: defaultProject[] = projects?.filter((project) => project.isFeatured);
		featured = featured.length > 5 ? featured.slice(0, 5) : featured;
		setFeaturedProjects(featured);
	}, []);

	return (
		<section className={styles.featuredProjectsSection}>
			{/* First element is for the styling */}
			<article></article>
			{projects && featuredProjects.length > 0 ? (
				featuredProjects.map((project) => <ProjectCard data={project} key={project.id} />)
			) : (
				<p>There is no featured project available.</p>
			)}
		</section>
	);
};

export default FeaturedProjectsSection;
