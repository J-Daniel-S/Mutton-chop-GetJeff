import React from 'react';
import StyledPage from '../Style/StyledPage';

// import './DefeatStyles.css';

const defeatNormal = (props) => {
	return (
		<StyledPage>
			<div className="message">
				<h1><span>Looks like Jeff pied you straight in the face, </span></h1>
				<h1><span>or it would if you could see through the whipped cream...</span></h1>
				<h1><span>(you missed a Jeff... or maybe a Geoff)</span></h1>
				<h1><span> As the pie dribbles down your</span></h1>
				<h1><span> face you reflect on your life.</span></h1>
				<br />
				<button onClick={props.startAgain} onMouseOver={props.changeText}>{props.defeatButton}</button>
			</div>
		</StyledPage>
	)
};

export default defeatNormal;