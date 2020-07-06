import React from 'react';
import StyledPage from '../Style/StyledPage';

const errorPage = (props) => {
	return (
		<StyledPage>
			<div className="message">
				<h1>As you left the home a crack appeared in reality.  You'll have to rewind time to before you left.</h1>
				<br />
				<button onClick={props.startAgain}>Reboot reality</button>
			</div>
		</StyledPage>
	)
};

export default errorPage;