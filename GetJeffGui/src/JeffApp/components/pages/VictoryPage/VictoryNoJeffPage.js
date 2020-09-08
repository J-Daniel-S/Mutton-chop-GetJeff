import React from 'react';
import StyledPage from '../Style/StyledPage';

const victoryNoJeffPage = (props) => {
	return (
	<StyledPage>
		<h1><span>You stand victorious!  Not only did Jeff not pie you but he was too afraid to even show up to throw a pie.  Jeffs
			everywhere wail in despair and with great respect for you as they line up before you to receive their pie-ing.  As one giant crowd, 
			with bottom
			lips quivering, they march to the courthouse 
			to forever change their name to "Jeff the Pied" to commemorate your glorious victory today.  As for you, you can now walk free,
			unhindered by fear that today might be the day that Jeff pies you in the face, thus winning this harrowing, historic pie war.</span>
		</h1>
		<button onClick={props.startAgain}>Return home a victor</button>
	</StyledPage>
	)
};

export default victoryNoJeffPage;