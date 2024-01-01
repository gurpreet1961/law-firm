import React from "react";
import styles from "./Team.module.css";
import Card from "./Card/Card";
import img1 from "../../Assets/team1.png";
import img2 from "../../Assets/team2.png";
import img3 from "../../Assets/team3.png";
import img4 from "../../Assets/team4.png";
import img5 from "../../Assets/team5.png";
import img6 from "../../Assets/team6.png";
const Team = () => {
	return (
		<div className={styles.wapper}>
			<h1>Our Team</h1>
			<div className={styles.cardWapper}>
				<Card img={img1} name="Danial Def" cases="301" />
				<Card img={img2} name="Danial Def" cases="301" />
				<Card img={img3} name="Danial Def" cases="301" />
			</div>
			<div className={styles.cardWapper}>
				<Card img={img4} name="Danial Def" cases="301" />
				<Card img={img5} name="Danial Def" cases="301" />
				<Card img={img6} name="Danial Def" cases="301" />
			</div>
		</div>
	);
};

export default Team;
