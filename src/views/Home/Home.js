import React from 'react';
import BarProfile from "../../components/Home/BarProfile";
import CardInfo from "../../components/Home/CardInfo";
import ActionsSection from "../../components/Home/ActionsSection";
import TransactionHistory from "../../components/Home/TransactionHistory";
import NavigationBar from "../../components/Home/NavigationBar";

function Home() {
	return (
		<div className="wrapper-x home flex flex-col">
			<BarProfile />
			<CardInfo />
			<ActionsSection />
			<TransactionHistory />
			<NavigationBar />
		</div>
	);
}

export default Home;