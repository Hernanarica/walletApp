import React from 'react';
import { imagePath } from "../../constants";
import BackButton from "../utils/BackButton";

function AddCard() {
	return (
		<div className="add-card flex flex-col items-center justify-center">
			<BackButton />
			<h2 className="add-card__title">Add Card</h2>
			<img
				src={ imagePath('./credit-card.png') }
				alt="credit card"
				className="add-card__image"
			/>
			<p className="add-card__paragraph">Add a new card<br/>on your wallet for easy life</p>
		</div>
	);
}

export default AddCard;