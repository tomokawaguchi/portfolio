import styles from "./AboutFeature.module.css";
import { TfiAlarmClock } from "react-icons/tfi";
import { TbStack2 } from "react-icons/tb";
import { AboutFeatureProps } from "../../types";

const AboutFeature = ({ iconType, headingNumber, headingUnit, paraText }: AboutFeatureProps) => {
	return (
		<div className={styles.aboutFeature}>
			<div className={styles.iconBarWrapper}>
				{iconType === "year" ? <TfiAlarmClock /> : <TbStack2 />}
				<span className={styles.bar}></span>
			</div>
			<h2 className={styles.heading}>
				{headingNumber}
				<span className={styles.innerText}>{headingUnit}</span>
			</h2>
			<p className={styles.para}>{paraText}</p>
		</div>
	);
};

export default AboutFeature;
