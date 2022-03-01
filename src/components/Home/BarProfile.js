import React from 'react';
import { imagePath } from "../../constants";

function BarProfile() {
	return (
		<div className="barProfile flex justify-between items-start">
			<div>
				<h1 className="barProfile__title">Wallet</h1>
				<span className="barProfile__status">active</span>
			</div>
			<img src={ imagePath('./profile-picture.png') }
			     alt="Profile"
			     className="barProfile__image"
			/>
		</div>
	);
}

export default BarProfile;