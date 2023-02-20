import { useState } from "react";
import { filters } from "../../assets/data/contents";
import styles from "./ProjectFilter.module.css";

interface ProjectFilterProps {
	handleClick: (tabIndex: number) => void;
}

const ProjectFilter = ({ handleClick }: ProjectFilterProps) => {
	const [activeTab, setActiveTab] = useState(filters[0]);

	return (
		<ul className={styles.projectList}>
			{filters?.map((filter, index) => (
				<li key={index}>
					<button
						className={styles.projectListButton}
						onClick={() => {
							handleClick(index), setActiveTab(filter);
						}}
						data-active={activeTab === filter}
					>
						{filter}
					</button>
				</li>
			))}
		</ul>
	);
};

export default ProjectFilter;
