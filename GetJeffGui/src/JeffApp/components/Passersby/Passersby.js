import React, { lazy } from 'react';

const Passerby = lazy(() => import('./Passerby/passerby'));
const StyledPassersby = lazy(() => import('./StyledPassersby'));

const passersby = (props) => (

	props.passersby.map(
		(passerby, index) => {
			return (
				<StyledPassersby>
					<Passerby
						key={passerby.key}
						name={passerby.name}
						activity={passerby.activity}
						clicked={() => props.clicked(index)}
					/>
				</StyledPassersby>
			)
		})

)

export default passersby;