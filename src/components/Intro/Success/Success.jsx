import React from "react";
import SuccessCard from "./SuccessCard/SuccessCard";
import styles from "./Success.module.css";
const Success = () => {
	return (
		<div className={styles.SuccessWapper}>
			<h1>Why Choose us?</h1>
			<div className={styles.cardWapper}>
				<SuccessCard percentage="98" />
				<SuccessCard percentage="100" />
				<SuccessCard percentage="100" />
			</div>
		</div>
	);
};

export default Success;
