import { TagProps } from "../../types";
import styles from "./Tag.module.css";

const Tag = ({ tagText, addSrOnlyText }: TagProps) => {
  return (
    <div className={styles.tagWrapper}>
      {addSrOnlyText ?? <span className="sr-only">Project type:</span>}
      <span className={styles.tagText}>{tagText}</span>
    </div>
  );
};

export default Tag;
