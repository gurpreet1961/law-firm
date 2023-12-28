import React from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Home.module.css";
import Container from "@mui/material/Container";
import Herosection from "./Herosection/Herosection";

const Home = () => {
	return (
		<div className={styles.homeWapper}>
			<Navbar />
			<Herosection />
		</div>
	);
};

export default Home;
