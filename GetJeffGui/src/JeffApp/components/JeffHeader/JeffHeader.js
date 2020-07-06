import React from 'react';

import './JeffHeader.css';

const jeffHeader = (props) => {
	return (
			<div>
				<main role="main" className="main-content" id="main-content">
					<div className="titleCont">
						 <h1 className="main-title" id="main-title">
							The Jeffs are coming...
						 </h1>
					</div>
					<div style={{ color: 'white', opacity: '0.4', margin: 'auto' }}>
						Pie cursor made by
						<a
							href="http://www.freepik.com/"
							title="Freepik"> Freepik
								</a> from
						<a
							href="https://www.flaticon.com/"
							title="Flaticon"
						> www.flaticon.com
						</a>
					</div>
				</main>
				
			</div>
	);
};

export default jeffHeader;