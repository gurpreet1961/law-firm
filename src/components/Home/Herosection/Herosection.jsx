import React from "react";
import HeroImg from "../../../Assets/hero-image.png";
import styles from "./Herosection.module.css";
import { ReactComponent as MailIcon } from "../../../Assets/Vector.svg";
const Herosection = () => {
	return (
		<div className={styles.wapper}>
			<div className={styles.hero_text}>
				<h1>
					You don't have to
					<br /> Fight them Alone.
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
					curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
					hac massa gravida arcu interdum proin curae.
				</p>
				<div className={styles.email_input}>
					<MailIcon className={styles.mail_icon} />
					<input type="text" placeholder="Enter your eamil address" />
					<button>Let's Talk</button>
				</div>
			</div>
			<div className={styles.heroImage}>
				<img src={HeroImg} alt="" />
			</div>
		</div>
	);
};

export default Herosection;
