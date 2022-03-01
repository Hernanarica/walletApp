import React from 'react';
import { BellIcon, ChartBarIcon, CogIcon, CreditCardIcon } from "@heroicons/react/outline";

function NavigationBar() {
	return (
		<nav className="navigation animate__animated animate__fadeInUp">
			<ul className="navigation__items flex">
				<li className="navigation__item">
					<button className="navigation__btn">
						<CreditCardIcon />
					</button>
				</li>
				<li className="navigation__item">
					<button className="navigation__btn">
						<ChartBarIcon />
					</button>
				</li>
				<li className="navigation__item">
					<button className="navigation__btn">
						<BellIcon />
					</button>
				</li>
				<li className="navigation__item">
					<button className="navigation__btn">
						<CogIcon />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;