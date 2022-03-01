import React from 'react';
import { imagePath } from "../../constants";

function TransactionHistory() {
	return (
		<section className="transaction">
			<div className="flex items-center justify-between">
				<h2 className="transaction__title">Last Transaction</h2>
				<span className="transaction__view">View all</span>
			</div>
			<ul className="transaction__list">
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./netflix.png') } alt="Netflix" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Netflix <span>Month subscription</span></div>
					</div>
					<span className="transaction__item-price">$12</span>
				</li>
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./paypal.png') } alt="paypal" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Paypal<span>Tax</span></div>
					</div>
					<span className="transaction__item-price">$10</span>
				</li>
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./pay.png') } alt="pay" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Paylater<span>Buy item</span></div>
					</div>
					<span className="transaction__item-price">$2</span>
				</li>
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./paypal.png') } alt="paypal" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Paypal<span>Tax</span></div>
					</div>
					<span className="transaction__item-price">$10</span>
				</li>
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./pay.png') } alt="pay" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Paylater<span>Buy item</span></div>
					</div>
					<span className="transaction__item-price">$8</span>
				</li>
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./pay.png') } alt="pay" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Paylater<span>Buy item</span></div>
					</div>
					<span className="transaction__item-price">$4</span>
				</li>
				<li className="transaction__item flex items-center justify-between">
					<div className="flex items-center">
						<img src={ imagePath('./pay.png') } alt="pay" className="transaction__item-image" />
						<div className="transaction__item-info flex flex-col">Paylater<span>Buy item</span></div>
					</div>
					<span className="transaction__item-price">$20</span>
				</li>
			</ul>
		</section>
	);
}

export default TransactionHistory;