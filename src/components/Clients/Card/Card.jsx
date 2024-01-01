import React from "react";
import styles from "./Card.module.css";
const Card = ({ img, name, position, about }) => {
	return (
		<div className={styles.wapper}>
			<img src={img} alt="" />
			<div className={styles.nameWapper}>
				<h3>{name}</h3>
				<p>{position}</p>
			</div>
			<p>{about}</p>
		</div>
	);
};

export default Card;
