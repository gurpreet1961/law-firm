import React from "react";
import styles from "./Card.module.css";
const Card = ({ img, name, cases }) => {
	return (
		<div className={styles.wapper}>
			<img src={img} alt="" />
			<div>
				<h3>{name}</h3>
				<p>{cases} Cases</p>
			</div>
		</div>
	);
};

export default Card;
