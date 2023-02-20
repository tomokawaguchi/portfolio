import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo-white.svg";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import { Link } from "react-router-dom";

const Header = () => {
	const [isDesktop, setIsDesktop] = useState<boolean>(true);
	const [isMobileActive, setIsMobileActive] = useState<boolean>(false);

	const classes = isMobileActive ? [`${styles.header} ${styles.isMobileActive}`] : [`${styles.header}`];

	useEffect(() => {
		handleScreen();
		if (window.innerWidth <= 800) setIsDesktop(false);
	}, []);

	const handleScreen = () => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 800) {
				setIsDesktop(true);
				setIsMobileActive(false);
				document.body.classList.remove("isOpen");
			}
			if (window.innerWidth <= 800) {
				setIsDesktop(false);
			}
		});
	};

	const handleClick = () => {
		setIsMobileActive(!isMobileActive);
		if (document.body.classList.contains("isOpen")) {
			document.body.classList.remove("isOpen");
		} else {
			document.body.classList.add("isOpen");
		}
	};

	return (
		<header className={classes.join(" ")}>
			<div id="headerInner" className={styles.headerInner}>
				<div className={styles.logoNav}>
					<Link to="/">
						<img src={logo} />
					</Link>
					<Nav navFor="main" isDesktop={isDesktop} isMobileActive={false} />
				</div>
				<Socials socialsFor="main" isDesktop={isDesktop} isMobileActive={false} />

				{/* Mobile menu */}
				<button id={styles.mobileMenuButton} onClick={handleClick}>
					<span id={styles.mobileMenuText}>Menu</span>

					<div id={styles.hamburgerMenu}>
						<div className={styles.bar}></div>
						<div className={styles.bar}></div>
					</div>
				</button>

				<div id="mobileMenu" className={styles.mobileMenuWrapper}>
					<Nav navFor="mobile" isDesktop={false} isMobileActive={isMobileActive} handleClick={handleClick} />
					<Socials socialsFor="mobile" isDesktop={false} isMobileActive={isMobileActive} />
				</div>
			</div>
		</header>
	);
};

export default Header;
