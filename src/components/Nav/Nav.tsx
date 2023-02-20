import { Link } from "react-router-dom";
import { NavProps } from "../../types";
import styles from "./Nav.module.css";

const Nav = ({ navFor, isDesktop, isMobileActive, handleClick }: NavProps) => {
	const classes = navFor == "main" ? [styles.mainNav] : [styles.mobileNav];
	return (
		<nav className={classes.join(" ")}>
			{(isDesktop || isMobileActive) && (
				<ul className={styles.navList}>
					<li>
						<Link to="./" onClick={handleClick}>
							Home
						</Link>
					</li>
					<li>
						<Link to="./projects" onClick={handleClick}>
							Projects
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Nav;
