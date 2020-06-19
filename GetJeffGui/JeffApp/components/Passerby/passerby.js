import React from 'react';
import StyledPasserby from './StyledPasserby';

import styled from 'styled-components';

const CenteredSpan = styled.span`
	vertical-align: middle;
	display: table-cell;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

const passerby = (props) => (
	<StyledPasserby
		key={props.key}
		onClick={props.clicked}>
		<CenteredSpan>
			<p>{props.name}{props.activity}</p>
		</CenteredSpan>
	</StyledPasserby>
);

export default React.memo(passerby);