import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

const Passersby = lazy(() => import('../components/Passersby'));

class Public extends Component {
	state = {
		passersby: [],
		redirecting: null,
		intervalStorer: null
	}

	componentDidMount() {
		if (this.bottomElement) {
			this.scrollToBottom();
		}
	}

	componentDidUpdate() {
		if (this.bottomElement) {
			this.scrollToBottom();
		}
	}

	redirectToJeff = () => {
		this.setState({ redirecting: <Redirect from="/" to="/jeff-be-acomin" /> });
		this.startJeff();
	}

	startJeff = () => {
		this.setState({ passersby: [] })
		// this.setState({ redirecting: null })
		// console.log('startJeff run');
		axios.get('http://localhost:8080/get_jeff');
		setTimeout(this.stopIt, 20000)
		this.queryForJeff();

		//remember to call clearTimeout() if defeat conditions are satisfied
	}

	queryForJeff = () => {
		// console.log('queryForJeff run');
		const interval = setInterval(this.assignJeff, 500);
		this.setState({ intervalStorer: interval });
	}

	assignJeff = () => {
		// console.log('assignJeff run');
		axios.get('http://localhost:8080/get_jeff/more_jeffs')
			.then(response => {
				const folks = response.data;
				const updatePassersby = this.state.passersby;
				updatePassersby.push.apply(updatePassersby, folks);
				this.setState({ passersby: updatePassersby });
			});
	}

	//these are just here for testing
	// postInterval = () => {
	// 	// let config = {
	// 	// 	headers: {
	// 	// 		header1: "access!"
	// 	// 	}
	// 	// }

	// 	import('axios').then(axios => {
	// 		const theInterval = 10;
	// 		console.log(theInterval);
	// 		axios.post('http://localhost:8080/get_jeff/store_interval', theInterval);
	// 	})
	// }

	deleteThisJeff = (index) => {
		// console.log('deleteThisJeff run');
		const folks = [...this.state.passersby];

		try {
			if (folks[index].name === "Jeff" || folks[index].name === "Geoff") {
				folks.splice(index, 1);
				this.setState({ passersby: folks });
			} else {
				this.piedByJeff();
			}
		} catch(err) {
			this.piedByJeff();
		}
		
	}

	piedByJeff = () => {
		this.stopIt();
	}

	stopIt = () => {
		clearInterval(this.state.intervalStorer);

		import('axios').then(axios => {
			axios.get('http://localhost:8080/get_jeff/stop_jeff')
		});

		// console.log('stopIt run');
		this.setState({ redirecting: <Redirect from="/jeff-be-acomin" to="/" /> })

		//if else statement to determine win or loss
		//check remaining folks for Jeffiness

	}

	scrollToBottom = () => {
		this.bottomElement.scrollIntoView();
		// console.log('scrollToBottom run');
	}

	render() {

		let people = null;

		if (this.state.passersby) {
			people = (
				<Passersby
					name={this.state.passersby.name}
					activity={this.state.passersby.activity}
					key={this.state.passersby.id}
					passersby={this.state.passersby}
					clicked={this.deleteThisJeff}
				/>
			)

		}

		let playing = (
			<div>
				<h1>Jeffs?</h1>
				<button onClick={() => this.postInterval}>Interval Test</button>
				<button onClick={() => this.stopIt}>NO MORE JEFFS</button>
				<Suspense fallback={<div>Jeff Could Be Anywhere...</div>}>
					{people}
				</Suspense>
			</div>
		);

		let startingPage = (
			<div>
				<h1>RU Readeh?</h1>
				<button onClick={() => this.redirectToJeff()}
				>Start the Jeffing</button>

			</div>
		);


		return (
			<BrowserRouter>
				{this.state.redirecting}
				<Switch>
					<Route
						exact
						path="/"
						render={() => startingPage}
					/>
					<Route
						exact
						path="/jeff-be-acomin"
						render={() => playing}
					/>
				</Switch>
				<div ref={(el) => { this.bottomElement = el }} />
			</BrowserRouter>
		)

	}
}

export default Public;