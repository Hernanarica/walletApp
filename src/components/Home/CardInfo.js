import React from 'react';
import { Link } from "react-router-dom";

function CardInfo() {
	return (
		<Link to="/detail-card" className="t-none">
			<section className="cardInfo">
				<div className="cardInfo-wrapper flex justify-center items-center">
					<div className="cardInfo__balanceInfo">
						<h2 className="cardInfo__balance">Balance</h2>
						<div className="cardInfo__balanceNumber">$1.234</div>
					</div>
					<p className="cardInfo__bank flex flex-col">Card <span>Mabank</span></p>
				</div>
			</section>
		</Link>
	);
}

export default CardInfo;