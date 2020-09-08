import React from 'react';
import StyledPage from '../Style/StyledPage';

const startingPage = (props) => {
	return (
	<StyledPage>
		<h1 style={{ fontSize: '48px' }}>It all started...</h1>
		<p>Just before you left your home to go into the city, every Jeff in the world declared pie war on you.
			They are going to pie you straight in the face and then laugh at you.
			Why?  Who can fathom the minds of the Jeffs and their wily ways?  As it turns out, appropos of nothing, you spent all last night
			making pies.  So you take action.  You load your vehicle with your pies and head into town.  
			You will be surrounded by innocents who have no idea
			how dastardly Jeff is or what he has challenged you to.  Can you avoid pieing them for no reason?
			Your war is just but you cannot have needly casualties.  Cast your pies.  Cast them justly and drive Jeff to surrender
			(new buttons will begin appearing after you click this button.  Click on buttons named "Jeff").
		</p>
		<button onClick={props.buttonClicked} onMouseOver={props.hovered}
		>{props.buttonText}</button>

	</StyledPage>
	)
};

export default startingPage;