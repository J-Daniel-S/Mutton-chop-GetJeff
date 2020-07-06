import React from 'react';
import StyledPasserby from './StyledPasserby';

import './passerby.css';

const passerby = (props) => (
	<StyledPasserby
		key={props.key}
		onClick={props.clicked}
		className="maybeJeff"
		>
		<span>
			<p>{props.name}</p>
			<p>{props.activity}</p>
		</span>
	</StyledPasserby>
);

export default React.memo(passerby);