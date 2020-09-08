import React from 'react';
import StyledPage from '../Style/StyledPage';

const defeatPiedWrong = (props) => {
	return (
	<StyledPage>
		<p className="message"><span>Why'd you do it?  Why would you throw your pie gleefully at poor, sweet, innocent {props.theName}?  You smugly
		rub your pie in their face, but as the seconds pass it dawns on you: {props.theName}'s name isn't "Jeff."
		They told you so, as though in slow motion, as your pie sped toward their face.  There they stand, tears welling up in their eyes
			wondering why you would pie them in the face.  Their bottom lip trembles and they burst into loud tears as lawyers descend
			from all directions to begin the lawsuits for your horrible assault.
			  As you stand, staring, aghast, Jeff takes advantage of the situation and pies you
			straight in the face.  At least you can't see the crying or the lawyers anymore...</span>
		</p>
		<button onClick={props.startAgain} onMouseOver={props.changeText}>{props.defeatButton}</button>
	</StyledPage>
	)
};

export default defeatPiedWrong;