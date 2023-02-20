import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
import styles from "./ProjectsListPage.module.css";
import { projects, filters } from "../../assets/data/contents.js";
import { useEffect, useState } from "react";
import { defaultProject } from "../../types";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsListPage = () => {
	const [displayedProjects, setDisplayedProjects] = useState<defaultProject[]>([]);

	useEffect(() => {
		if (projects) setDisplayedProjects(projects);
	}, []);

	const handleClick = (tabIndex: number) => {
		let selectedProjects = projects.filter((project) => project.techStack.includes(filters[tabIndex]));
		if (tabIndex === 0) selectedProjects = projects;

		setDisplayedProjects(selectedProjects);
	};

	return (
		<main id={styles.main}>
			<div className={styles.mainInner}>
				<section className={styles.introSec}>
					<h1>All Projects</h1>
					<p>Here you can brows all of my projects and works including both professional, _nology course and personal ones.</p>
				</section>

				<ProjectFilter handleClick={handleClick} />
				<section className={styles.projectsSec}>
					<div className={styles.gridList}>
						{displayedProjects && displayedProjects.length > 0 ? (
							displayedProjects.map((project, i) => <ProjectCard data={project} key={i} />)
						) : (
							<p className={styles.noProject}>There is no project available</p>
						)}
					</div>
				</section>
			</div>
		</main>
	);
};

export default ProjectsListPage;
