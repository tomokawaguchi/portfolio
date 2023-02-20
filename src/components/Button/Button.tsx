import styles from "./Button.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ButtonProps } from "../../types";

const Button = ({ buttonType, buttonText, linkTo }: ButtonProps) => {
	const classes = buttonType == "arrow-right" ? [`${styles.buttonInner} ${styles.arrowRight}`] : [`${styles.buttonInner} ${styles.arrowLeft}`];
	return (
		<button className={styles.button}>
			{buttonType == "arrow-right" ? (
				<span className={classes.join(" ")}>
					<Link to={`${linkTo}`}>
						{buttonText}
						<BsArrowRight />
					</Link>
				</span>
			) : buttonType == "arrow-left" ? (
				<span className={classes.join(" ")}>
					<Link to={`${linkTo}`}>
						<BsArrowLeft />
						{buttonText}
					</Link>
				</span>
			) : (
				<Link to={`${linkTo}`}>{buttonText}</Link>
			)}
		</button>
	);
};

export default Button;
