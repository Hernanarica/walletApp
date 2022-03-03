import React from 'react';
import BackButton from "../utils/BackButton";
import TransactionHistory from "../Home/TransactionHistory";
import NavigationBar from "../Home/NavigationBar";
import { imagePath } from "../../constants";

function Stats() {
	return (
		<div className="stats wrapper-x flex flex-col items-center justify-center">
			<BackButton />
			<div className="stats__group-1">
				<div className="stats__sub-group-1">
					<h2 className="stats__title">Total Balance</h2>
					<span className="stats__balance">$13.248</span>
				</div>
				<img src={ imagePath('./stats.png') } alt="Stats" className="stats__image" />
			</div>
			<TransactionHistory />
			<NavigationBar />
		</div>
	);
}

export default Stats;