import React from 'react';
import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./components/AddCard";
import DetailCard from "./components/DetailCard";
import Stats from "./components/Stats";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home /> }/>
				<Route path="/detail-card" element={ <DetailCard /> }/>
				<Route path="/add-card" element={ <AddCard /> }/>
				<Route path="/stats" element={ <Stats /> }/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;