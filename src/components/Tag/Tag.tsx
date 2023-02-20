import { TagProps } from "../../types";
import styles from "./Tag.module.css";

const Tag = ({ tagText }: TagProps) => {
	return (
		<div className={styles.tagWrapper}>
			<span className={styles.tagText}>{tagText}</span>
		</div>
	);
};

export default Tag;
