import Tag from "../Tag/Tag";
import styles from "./ProjectCard.module.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { ProjectCardProps } from "../../types";
import { Link } from "react-router-dom";

const ProjectCard = (data: ProjectCardProps) => {
  const { id, image, title, projectType } = data.data;
  return (
    <article className={styles.projectCard}>
      <Link to={`/projects/${id}`} className={styles.projectCardLink} aria-label={`View details for ${title} project`}>
        <img src={`../${image}`} alt={`${title} project thumbnail`} className={styles.projectThumbnail} />
        <Tag tagText={projectType} />
        <div className={styles.titleArrowWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <BsArrowRightCircle aria-hidden="true" />
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
