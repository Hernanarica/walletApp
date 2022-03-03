import React from 'react';
import BackButton from "../utils/BackButton";
import { imagePath } from "../../constants";

function DetailCard() {
	return (
		<div className="detail-card flex flex-col justify-center items-center">
			<BackButton />
			<h2 className="detail-card__title">Detail Card</h2>
			<img src={ imagePath('./credit-card-1.png') } alt="Credit card" className="detail-card__image" />
			<ul className="detail-card__items">
				<li className="detail-card__item">
					<strong>Name</strong>
					<span>Jaka mambang</span>
				</li>
				<li className="detail-card__item">
					<strong>Bank</strong>
					<span>Mabank</span>
				</li>
				<li className="detail-card__item">
					<strong>Account</strong>
					<span>.... .... .... 2138</span>
				</li>
				<li className="detail-card__item">
					<strong>Status</strong>
					<span>Active</span>
				</li>
				<li className="detail-card__item">
					<strong>Valid</strong>
					<span>2020 - 2025</span>
				</li>
			</ul>
			<button className="detail-card__btn">Delete Card</button>
		</div>
	);
}

export default DetailCard;