import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { goToHome } from '../redux/actions/navigation';
import moment from 'moment';
import Gradient from '../images/Gradient.png';
import Logo from '../images/logo.png';
import Thanks from '../images/Emojis/17.png';

class THANKS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectDate: {},
			selectDateIndex: null,
			selectedPlace: '',
			weekNumber: moment().isoWeekday(1).format('ww')
		};
	}

	goToHome = () => this.props.goToHome(this.props)

	render() {
		return (
			<div className="App">
				<header
					classname="Header"
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
				</header>
				<img src={Thanks} style={{ height: 100 }} />

				<p
					className="header-title"
					style={{
						color: '#F5A146',
						fontWeight: 'bold',
						paddingTop: 20,
						fontSize: 40,
						width: '90%',
						margin: 'auto'
					}}>
					Thank You!
				</p>
				<p
					className="header-title"
					style={{
						color: '#F5A146',
						fontWeight: 'bold',
						paddingBottom: 20,
						width: '90%',
						margin: 'auto'
					}}>
					Your karma is very happy!
				</p>
				<p
					className="header-title"
					style={{
						color: '#F5A146',
						paddingBottom: 20,
						width: '90%',
						margin: 'auto'
					}}>
					The route leader will be in contact with you though WhatsApp shortly to provide you with all the
					details you'll need!
				</p>
				<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>I have spare time on</text>

				<button
					onClick={this.goToHome}
					style={{
						borderRadius: 4,
						display: 'flex',
						width: '80%',
						margin: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundImage: `url(${Gradient})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}>
					<text className="header-title-date" style={{ color: 'white', fontWeight: 'bold' }}>
						BACK TO HOMEPAGE
					</text>
				</button>
				<div style={{ height: 50 }} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
	goToHome
};

export default connect(mapStateToProps, mapDispatchToProps)(THANKS);
