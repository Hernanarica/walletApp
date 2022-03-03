import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from "@heroicons/react/outline";

function BackButton() {
	const navigate = useNavigate();
	
	const handleBackPage = () => {
		navigate(-1);
	};
	
	return (
		<button className="back-button" onClick={ handleBackPage }>
			<ChevronLeftIcon />
		</button>
	);
}

export default BackButton;