import styles from "./LinkButton.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LinkButtonProps } from "../../types";

const LinkButton = ({ buttonType, buttonText, linkTo }: LinkButtonProps) => {
  const isRightArrow = buttonType === "arrow-right";
  const isLeftArrow = buttonType === "arrow-left";
  const classes = buttonType == "arrow-right" ? [`${styles.buttonInner} ${styles.arrowRight}`] : [`${styles.buttonInner} ${styles.arrowLeft}`];

  const linkSlasses = buttonType == "arrow-right" ? [`${styles.linkButton} ${styles.arrowRight}`] : [`${styles.linkButton} ${styles.arrowLeft}`];

  return (
    <Link to={`${linkTo}`} className={linkSlasses.join(" ")}>
      {isLeftArrow && <BsArrowLeft />}
      {buttonText}
      {isRightArrow && <BsArrowRight />}
    </Link>
  );
};

export default LinkButton;
