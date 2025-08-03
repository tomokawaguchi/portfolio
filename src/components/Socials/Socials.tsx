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
            <a href="mailto:tomo.k.dev@gmail.com" aria-label="Email Tomoko">
              <HiOutlineMail aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://github.com/tomokawaguchi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <RiGithubLine aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tomoko-kawaguchi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <RiLinkedinLine aria-hidden="true" />
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

export default Socials;
