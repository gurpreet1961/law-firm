import React from "react";
import logo from "../../../Assets/logo.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="" />
			<ul className={styles.list}>
				<li>Home</li>
				<li>Attorneys</li>
				<li>Practice Areas</li>
				<li>About Us</li>
			</ul>
			<button className={styles.contactBtn}>Contact Now</button>
		</nav>
	);
};

export default Navbar;
