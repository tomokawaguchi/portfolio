import Tag from "../Tag/Tag";
import styles from "./ProjectCard.module.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { ProjectCardProps } from "../../types";
import { Link } from "react-router-dom";

const ProjectCard = (data: ProjectCardProps) => {
	return (
		<article className={styles.projectCard} style={{ backgroundImage: `url(../${data.data.image})` }}>
			<Link to={`/projects/${data.data.id}`} className={styles.projectCardLink}>
				<Tag tagText={data.data.projectType} />
				<div className={styles.titleArrowWrapper}>
					<h3 className={styles.title}>{data.data.title}</h3>
					<BsArrowRightCircle />
				</div>
			</Link>
		</article>
	);
};

export default ProjectCard;
