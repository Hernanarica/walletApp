import React from 'react';
import { BellIcon, ChartBarIcon, CogIcon, CreditCardIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function NavigationBar() {
	return (
		<div className="navigation flex justify-center animate__animated animate__backInUp animate__faster">
			<nav className="navigation__wrapper">
				<ul className="navigation__items flex">
					<li className="navigation__item">
						<Link to="/add-card" className="navigation__btn">
							<CreditCardIcon />
						</Link>
					</li>
					<li className="navigation__item">
						<Link to="/stats" className="navigation__btn">
							<ChartBarIcon />
						</Link>
					</li>
					<li className="navigation__item">
						<button className="navigation__btn">
							<BellIcon />
						</button>
					</li>
					<li className="navigation__item">
						<Link to="/stats" className="navigation__btn">
							<CogIcon />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavigationBar;