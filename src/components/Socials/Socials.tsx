import styles from "./Socials.module.css";
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { SocialsProps } from "../../types";

const Socials = ({ socialsFor, isDesktop, isMobileActive }: SocialsProps) => {
	const classes = socialsFor === "main" ? [`${styles.socialsList} ${styles.socialsListMain}`] : [`${styles.socialsList} ${styles.socialsListMobile}`];
	return (
		<ul className={classes.join(" ")}>
			{(isDesktop || isMobileActive) && (
				<>
					<li>
						<a href="mailto:tomo.k.dev@gmail.com">
							<HiOutlineMail />
						</a>
					</li>
					<li>
						<a href="https://github.com/tomokawaguchi" target="_blank">
							<RiGithubLine />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/tomoko-kawaguchi/" target="_blank">
							<RiLinkedinLine />
						</a>
					</li>
				</>
			)}
		</ul>
	);
};

export default Socials;
