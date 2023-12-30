import React from "react";
import styles from "./SuccessCard.module.css";
import giftIcon from "../../../../Assets/Union.png";
const SuccessCard = ({ percentage }) => {
	return (
		<div className={styles.card}>
			<div className={styles.giftIcon}>
				<img src={giftIcon} alt="" />
			</div>
			<h3>{percentage}% Success Rate</h3>
			<p>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequatduis enim velit mollit Exer.
			</p>
			<button>Read More</button>
		</div>
	);
};

export default SuccessCard;
