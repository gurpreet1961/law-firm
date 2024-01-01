import React from "react";
import logo from "../../../Assets/logo.png";
import styles from "./Navbar.module.css";
import fb from "../../../Assets/fb.png";
import insta from "../../../Assets/insta.png";
import pin from "../../../Assets/pin.png";
import twitter from "../../../Assets/twitter.png";
const Navbar = ({ footer }) => {
	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="" />
			<ul className={styles.list}>
				<li>Home</li>
				<li>Attorneys</li>
				<li>Practice Areas</li>
				<li>About Us</li>
			</ul>
			{footer ? (
				<div className={styles.socialIcons}>
					<img src={insta} alt="" />
					<img src={fb} alt="" />
					<img src={twitter} alt="" />
					<img src={pin} alt="" />
				</div>
			) : (
				<button className={styles.contactBtn}>Contact Now</button>
			)}
		</nav>
	);
};

export default Navbar;
