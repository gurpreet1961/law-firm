import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./Clients.module.css";
import Card from "./Card/Card";
import img1 from "../../Assets/client1.png";
import img2 from "../../Assets/client2.png";
import img3 from "../../Assets/client3.png";
const Clients = () => {
	return (
		<div className={styles.wapper}>
			<div className={styles.headingWapper}>
				<h1 className="text-center">
					What says our
					<br />
					happy Clients
				</h1>
				<div className={styles.btnWapper}>
					<div className={styles.arrowWapper}>
						<ArrowBackIcon className={styles.ArrowBtn} />
					</div>
					<div className={styles.arrowWapper}>
						<ArrowForwardIcon className={styles.ArrowBtn} />
					</div>
				</div>
			</div>
			<div className={styles.cardWapper}>
				<Card
					img={img1}
					name="Jane Cooper"
					position="Ceo of Hunt"
					about="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia"
				/>{" "}
				<Card
					img={img2}
					name="Devon Lane"
					position="Ceo of Hunt"
					about="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia"
				/>{" "}
				<Card
					img={img3}
					name="Robert Fox"
					position="Ceo of Hunt"
					about="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia"
				/>
			</div>
		</div>
	);
};

export default Clients;
