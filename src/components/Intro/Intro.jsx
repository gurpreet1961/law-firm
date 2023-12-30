import React from "react";
import styles from "./Intro.module.css";
import Success from "./Success/Success";
const Intro = () => {
	return (
		<div className={styles.wapper}>
			<div className={styles.IntroWapper}>
				<div className={styles.IntroHeading}>
					<h1>Let’s Introduce Ourself</h1>
				</div>
				<div className={styles.IntroBody}>
					<h4>Criminal Lawyer</h4>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequatduis enim velit mollit Exercitation.
					</p>
				</div>
			</div>
			<Success />
		</div>
	);
};

export default Intro;
