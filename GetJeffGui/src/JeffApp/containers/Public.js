import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Passersby from '../components/Passersby/Passersby';
import StartingPage from '../components/pages/StartingPage/StartingPage';
import VictoryPage from '../components/pages/VictoryPage/VictoryPage';
import VictoryNoJeffPage from '../components/pages/VictoryPage/VictoryNoJeffPage';
import DefeatNormal from '../components/pages/DefeatPages/DefeatNormal';
import DefeatPiedWrong from '../components/pages/DefeatPages/DefeatPiedWrong';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';

class Public extends Component {
	state = {
		passersby: [],
		folkNames: [],
		redirecting: null,
		intervalStorer: null,
		timeStorer: null,
		name: null,
		buttonText: 'You have readied yourself...',
		defeatBtnText: 'Jeff is gloating',
		noJeffs: true
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

	redirectToStartJeff = () => {
		this.setState({ buttonText: 'You have readied yourself...', defeatBtnText: 'Jeff is gloating' });
		setTimeout(this.startJeffAfterDelay, 3000);
		document.body.style.cursor = "wait";
	}

	startJeffAfterDelay = () => {
		this.setState({ redirecting: <Redirect to="/r-u-ready-4-jeff" /> });
		document.body.style.cursor = "default";
	}

	startJeff = () => {
		this.setState({ passersby: [] });
		// console.log('startJeff run');
		axios.get('/get_jeff')
			.catch(this.stopIt);
		const theTime = setTimeout(this.timedOut, 40000);
		this.setState({ timeStorer: theTime });
		this.queryForJeff();
	}

	queryForJeff = () => {
		// console.log('queryForJeff run');
		const interval = setInterval(this.assignJeff, 500);
		this.setState({ intervalStorer: interval });
	}

	assignJeff = () => {
		// console.log('assignJeff run');
		axios.get('/get_jeff/more_jeffs')
			.then(response => {
				const folks = response.data;
				const updatePassersby = this.state.passersby;
				updatePassersby.push.apply(updatePassersby, folks);
				this.setState({ passersby: updatePassersby });
			});
	}

	deleteThisJeff = (index) => {
		// console.log('deleteThisJeff run');
		const folks = [...this.state.passersby];

		try {

			if (folks[index].name === "Jeff" || folks[index].name === "Geoff") {
				folks.splice(index, 1);
				this.setState({ passersby: folks });
				this.setState({ noJeffs: false });
			} else {
				let theirName = folks[index].name;
				this.setState({ name: theirName })
				this.notJeffIsCrying();
			}
		} catch (error) {
			this.setState({ redirecting: <Redirect to="/jeff-error" /> })
		}
	}

	notJeffIsCrying = () => {
		// console.log('notJeffIsCrying run');
		this.clearTimeAndInterval();
		this.stopItWhileTheyCry();
	}

	clearTimeAndInterval = () => {
		// console.log('clearTimeAndInterval run');
		clearInterval(this.state.intervalStorer);
		clearTimeout(this.state.timeStorer);
	};

	timedOut = () => {
		const folks = [...this.state.passersby];

			folks.forEach((folk) => {
				if (Object.is(folk.name, "Jeff") || Object.is(folk.name, "Geoff")) {
					this.setState({ noJeffs: false });
				}
			});

		this.stopIt();
	}

	stopIt = () => {
		clearInterval(this.state.intervalStorer);
		axios.get('/get_jeff/stop_jeff');
		// console.log('stopIt run');
		this.determineWinner();
	}

	stopItWhileTheyCry = () => {
		axios.get('/get_jeff/stop_jeff');
		// console.log('stopItWhileTheyCry run');
		this.setState({ redirecting: <Redirect from="/jeff-be-acomin" to="/pies-and-litigation" /> });
	}

	determineWinner = () => {
		// console.log('determineWinner run');

		try {
			const folks = [...this.state.passersby];

			for (let folk of folks) {
				if (Object.is(folk.name, "Jeff") || Object.is(folk.name, "Geoff")) {
					this.setState({ redirecting: <Redirect from="/jeff-be-acomin" to="/jeff-got-u" /> });
					break;
				} else {
					this.state.noJeffs ? 
						this.setState({ redirecting: <Redirect from="/jeff-be-acomin" to="/jeff-was-scared" /> }) :
						this.setState({ redirecting: <Redirect from="/jeff-be-acomin" to="/u-got-jeff" /> });
				}
			};

			// console.log('folks assigned');

		} catch (error) {
			this.setState({ redirecting: <Redirect to="/jeff-error" /> })
		}
	}

	scrollToBottom = () => {
		this.bottomElement.scrollIntoView();
		// console.log('scrollToBottom run');
	}

	changeText = () => {
		this.setState({ buttonText: 'Begin the war', defeatBtnText: 'Demand a rematch' });
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

		const playing = (
			<div>
				<Suspense fallback={
					<div style={{
						color: '#DDD0CE',
						textAlign: 'center',
						margin: 'auto',
						fontSize: '24px'
					}}
					>
						Jeff Could Be Anywhere...
					</div>}>
					{people}
				</Suspense>
			</div>
		);

		const startingPage = <StartingPage
			buttonClicked={this.redirectToJeff}
			hovered={this.changeText}
			buttonText={this.state.buttonText} />

		const defeatNormal = <DefeatNormal
			startAgain={this.redirectToStartJeff}
			changeText={this.changeText}
			defeatButton={this.state.defeatBtnText} />

		const defeatPiedWrong = <DefeatPiedWrong
			theName={this.state.name}
			startAgain={this.redirectToStartJeff}
			changeText={this.changeText}
			defeatButton={this.state.defeatBtnText} />

		const victory = <VictoryPage startAgain={this.redirectToStartJeff} />

		const JefflessVictory = <VictoryNoJeffPage startAgain={this.redirectToStartJeff} />

		const error = <ErrorPage startAgain={this.redirectToStartJeff} />

		return (
			<React.Fragment>
				<BrowserRouter>
					{this.state.redirecting}
					<Switch>
						<Route
							exact
							path="/r-u-ready-4-jeff"
							render={() => startingPage}
						/>
						<Route
							exact
							path="/jeff-be-acomin"
							render={() => playing}
						/>
						<Route
							exact
							path="/jeff-got-u"
							render={() => defeatNormal}
						/>
						<Route
							exact
							path="/pies-and-litigation"
							render={() => defeatPiedWrong}
						/>
						<Route
							exact
							path="/u-got-jeff"
							render={() => victory}
						/>
						<Route
							exact
							path="/jeff-was-scared"
							render={() => JefflessVictory}
						/>
						<Route
							exact
							path="/jeff-error"
							render={() => error}
						/>
						<Redirect from="/" to="/r-u-ready-4-jeff" />
					</Switch>
				</BrowserRouter>
				<div ref={(el) => { this.bottomElement = el }} style={{ height: '120px', backgroundColor: '#565D61', textAlign: 'center' }} />
			</React.Fragment>
		)

	}
}

export default Public;