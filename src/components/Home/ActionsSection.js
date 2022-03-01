import React from 'react';
import { CurrencyDollarIcon, PlusCircleIcon, SwitchVerticalIcon, UploadIcon } from "@heroicons/react/outline";

function ActionsSection() {
	return (
		<div className="actions flex justify-between">
			<div className="action__btn flex flex-col">
				<button className="btn-action flex items-center justify-center">
					<SwitchVerticalIcon />
				</button>
				<span className="action__btn-description">Transfer</span>
			</div>
			<div className="action__btn flex flex-col">
				<button className="btn-action flex items-center justify-center">
					<UploadIcon />
				</button>
				<span className="action__btn-description">Transfer</span>
			</div>
			<div className="action__btn flex flex-col">
				<button className="btn-action flex items-center justify-center">
					<CurrencyDollarIcon />
				</button>
				<span className="action__btn-description">Transfer</span>
			</div>
			<div className="action__btn flex flex-col">
				<button className="btn-action flex items-center justify-center">
					<PlusCircleIcon />
				</button>
				<span className="action__btn-description">Transfer</span>
			</div>
		</div>
	);
}

export default ActionsSection;