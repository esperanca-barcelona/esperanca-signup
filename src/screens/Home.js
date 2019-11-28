import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getGoogleSheet } from '../redux/actions/googleSheet';
import { goToLists } from '../redux/actions/navigation';
import { addDatePlacetoList, removeList } from '../redux/actions/form';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Clock from '../images/Emojis/18.png';
import Point from '../images/Emojis/16.png';
import Gradient from '../images/Gradient.png';
import Logo from '../images/logo.png';

import Tree from '../images/Emojis/13.png';
import Raval from '../images/Emojis/14.png';

const options = [
	{ date: '2019/11/09', bi: '1first', email: 'email@email.com', phone: '112312' },
	{ date: '2019/11/10', bi: '2second', email: 'email@email.com', phone: '112312' },
	{ date: '2019/11/16', bi: '1first', email: 'email@email.com', phone: '112312' },
	{ date: '2019/11/17', bi: '2second', email: 'email@email.com', phone: '112312' },
	{ date: '2019/11/23', bi: '1first', email: 'email@email.com', phone: '112312' },
	{ date: '2019/11/24', bi: '2second', email: 'email@email.com', phone: '112312' },
	{ date: '2019/11/30', bi: '1first', email: 'email@email.com', phone: '112312' },
	{ date: '2019/12/01', bi: '2second', email: 'email@email.com', phone: '112312' }
];

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectDate: {},
			selectDateIndex: null,
			selectedPlace: '',
			weekNumber: moment().isoWeekday(1).format('ww')
		};
		this.props.removeList();
	}

	componentWillMount() {
		this.props.getGoogleSheet();
	}

	goToLists = () => {
		if (Object.keys(this.state.selectDate).length > 0 && this.state.selectedPlace !== '') {
			this.props.goToLists(this.props);
			this.props.addDatePlacetoList(this.state.selectDate, this.state.selectedPlace);
		} else {
			this.setState({
				err: 'Something is missing!'
			});
			setTimeout(() => {
				this.setState({
					err: ''
				});
			}, 4000);
		}
	};

	render() {
		return (
			<div className="App">
				<header
					className="Header"
					style={{
						height: '45%',
						paddingTop: 40,
						width: '100%',
						justifyContent: 'center',
						aligItems: 'center',
						backgroundImage: `url(${Gradient})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}>
					<img src={Logo} style={{ width: '40%' }} />
					<p
						className="header-title"
						style={{
							color: 'white',
							width: '80%',
							margin: 'auto',
							paddingTop: 0,
							paddingBottom: 20,
							textAlign: 'center',
							fontWeight: 'bold'
						}}>
						We deliver hot food to homeless people and we need help!
					</p>
				</header>
				<p
					className="header-title"
					style={{
						color: '#F5A146',
						size: 40,
						fontWeight: 'bold',
						paddingTop: 20,
						paddingBottom: 20,
						width: '80%',
						margin: 'auto'
					}}>
					Fill in the form below to volunteer
				</p>
				<div
					style={{
						backgroundColor: '#BE46E7',
						height: 50,
						width: '90%',
						margin: 'auto',
						display: 'flex',
						alignItems: 'center'
					}}>
					<img src={Clock} style={{ height: 60 }} />
					<div style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>I have spare time on</div>
				</div>
				<div className="Button-Container" style={{ marginTop: 40 }}>
					{options.map((e, i) => {
						if (moment(e.date).isoWeekday(1).format('ww') === this.state.weekNumber.toString()) {
							return (
								<button
									onClick={() => {
										this.setState({ selectDateIndex: i, selectDate: e });
									}}
									style={{
										borderWidth: 2,
										borderRadius: 4,
										borderColor: '#BE46E7',
										display: 'flex',
										marginLeft: 10,
										marginRight: 10,
										justifyContent: 'center',
										flexDirection: 'column',
										backgroundColor: this.state.selectDateIndex === i ? '#BE46E7' : 'white',
										width: '40%',
										height: '100%'
									}}>
									<text
										className="header-title-date"
										style={{
											color: this.state.selectDateIndex === i ? 'white' : '#282c34',
											textAlign: 'left'
										}}>
										{moment(e.date).format('dddd  DD')}{' '}
									</text>
									<text
										className="header-title"
										style={{
											color: this.state.selectDateIndex === i ? 'white' : '#282c34',
											textAlign: 'left'
										}}>
										{moment(e.date).format('MMMM')}{' '}
									</text>
								</button>
							);
						}
					})}
				</div>
				<Button
					style={{
						backgroundColor: 'white',
						borderColor: 'white',
						marginTop: 20,
						aligItems: 'center',
						justifyContent: 'center'
					}}
					onClick={() => {
						this.setState({
							weekNumber: Number(this.state.weekNumber) + 1,
							selectDateIndex: null,
							selectDate: {}
						});
					}}>
					<p style={{ color: '#282c34', fontWeight: 'bold' }}>{'SEE NEXT WEEK >'} </p>
				</Button>

				<div
					style={{
						backgroundColor: '#23CDC0',
						height: 50,
						width: '90%',
						margin: 'auto',
						display: 'flex',
						alignItems: 'center'
					}}>
					<img src={Point} style={{ height: 60 }} />
					<div style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>I would like to help in...</div>
				</div>
				<div className="Button-Container" style={{ marginTop: 40, marginBottom: 40 }}>
					<button
						onClick={() => {
							this.setState({ selectedPlace: 'park' });
						}}
						style={{
							borderWidth: 2,
							borderRadius: 4,
							borderColor: '#23CDC0',
							display: 'flex',
							marginLeft: 10,
							marginRight: 10,
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							backgroundColor: this.state.selectedPlace === 'park' ? '#23CDC0' : 'white',
							width: '40%',
							height: '100%'
						}}>
						<img src={Tree} style={{ height: 100 }} />

						<div
							className="header-title-date"
							style={{
								color: this.state.selectedPlace === 'park' ? 'white' : '#282c34',
								textAlign: 'left'
							}}>
							Park
						</div>
					</button>

					<button
						onClick={() => {
							this.setState({ selectedPlace: 'raval' });
						}}
						style={{
							borderWidth: 2,
							borderRadius: 4,
							borderColor: '#23CDC0',
							display: 'flex',
							marginLeft: 10,
							marginRight: 10,
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							backgroundColor: this.state.selectedPlace === 'raval' ? '#23CDC0' : 'white',
							width: '40%',
							height: '100%'
						}}>
						<img src={Raval} style={{ height: 100 }} />

						<div
							className="header-title-date"
							style={{
								color: this.state.selectedPlace === 'raval' ? 'white' : '#282c34',
								textAlign: 'left'
							}}>
							Raval
						</div>
					</button>
				</div>

				<button
					onClick={this.goToLists}
					style={{
						borderRadius: 4,
						display: 'flex',
						width: '50%',
						margin: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundImage: `url(${Gradient})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}>
					<div className="header-title-date" style={{ color: 'white', fontWeight: 'bold' }}>
						Next
					</div>
				</button>
				{this.state.err && (
					<div
						className="header-title"
						style={{ color: 'red', marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>
						{this.state.err}
					</div>
				)}
				<div style={{ height: 50 }} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = {
	getGoogleSheet,
	goToLists,
	addDatePlacetoList,
	removeList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
