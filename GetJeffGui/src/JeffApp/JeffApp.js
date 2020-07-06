import React, { Component } from 'react';

import Public from './containers/Public';
import JeffHeader from './components/JeffHeader/JeffHeader';
import StyledPublic from './containers/StyledPublic';
import './JeffApp.css'

class JeffApp extends Component {


	render() {
		return (
			<React.Fragment>
				<JeffHeader />
				<StyledPublic>
					<Public />
				</StyledPublic>
			</React.Fragment>
		);
	}
}

export default JeffApp;