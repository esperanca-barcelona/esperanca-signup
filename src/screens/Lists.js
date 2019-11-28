import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getGoogleSheet } from '../redux/actions/googleSheet';
import { goToHome, goToEnd } from '../redux/actions/navigation';
import { addOtherstoList } from '../redux/actions/form';
import Gradient from '../images/Gradient.png';
import Logo from '../images/logo.png';

import i3 from '../images/Emojis/3.png';
import i4 from '../images/Emojis/4.png';
import i5 from '../images/Emojis/5.png';
import i7 from '../images/Emojis/7.png';
import i8 from '../images/Emojis/8.png';
import i9 from '../images/Emojis/9.png';
import i10 from '../images/Emojis/10.png';
import i11 from '../images/Emojis/11.png';

import i15 from '../images/Emojis/15.png';
import i12 from '../images/Emojis/12.png';

const delivery = [
	{
		title: 'Walker',
		img: i15,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Host',
		img: i12,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Route Leader',
		img: i11,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Emergency Volunteer',
		img: i10,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	}
];
const cooking = [
	{
		title: 'Vegetable Soup',
		img: i9,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Hard-boiled Eggs',
		img: i8,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Tuna Sandwiches',
		img: i7,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Cheese Sandwiches',
		img: i5,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Cookies or Magdalenas',
		img: i4,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Small Juices',
		img: i3,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	}
];
const donation = [
	{
		title: 'Sleeping Bags/Blankets',
		img: '🧦',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Cloths and Shoes',
		img: '🛁',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Toiletries',
		img: '👖',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	},
	{
		title: 'Other Donations',
		img: '📦',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	}
];

class Lists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDeliveryIndex: null,
			selectedCookingIndex: null,
			selectedDonationIndex: null,
			name: '',
			email: '',
			phone: ''
		};
	}

	componentWillMount() {
		if (Object.keys(this.props.form.date).length === 0 && this.props.form.place === '') {
			this.props.goToHome(this.props);
		}
	}

	goToHome = () => this.props.goToHome(this.props);

	goToEnd = async () => {
		const { selectedDeliveryIndex, selectedCookingIndex, selectedDonationIndex, name, email, phone } = this.state;
		const selectedDeliveryItem = selectedDeliveryIndex ? delivery[selectedDeliveryIndex].title : null;
		const selectedCookingItem = selectedCookingIndex ? cooking[selectedCookingIndex].title : null;
		const selectedDonateItem = selectedDonationIndex ? donation[selectedDonationIndex].title : null;
		if (
			(selectedDeliveryItem || selectedCookingItem || selectedDonateItem) &&
			name !== '' &&
			email !== '' &&
			phone !== ''
		) {
			await this.props.addOtherstoList(selectedDeliveryItem,selectedCookingItem, selectedDonateItem, name, email, phone );
			console.log(this.props.form)
			this.props.goToEnd(this.props);
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
					Select one or multiple tasks you can help us with
				</p>

				<div className="sub-title">
					<p
						className="header-title"
						style={{
							color: '#51D2C8',
							size: 40,
							display: 'flex',
							alignItems: 'flex-start',
							width: '90%',
							margin: 'auto',
							fontWeight: 'bold',
							paddingTop: 20
						}}>
						Delivery task
					</p>

					{delivery.map((e, i) => (
						<button
							onClick={() => {
								this.setState({
									selectedDeliveryIndex: this.state.selectedDeliveryIndex === i ? null : i,
									selectDate: e
								});
							}}
							style={{
								backgroundColor: this.state.selectedDeliveryIndex === i ? '#2E7771' : '#51D2C8',
								width: '90%',
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								margin: 'auto',
								flexDirection: 'column'
							}}>
							<div>
								<img src={e.img} style={{ height: 60 }} />
								<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.title}</text>
								{this.state.selectedDeliveryIndex === i && (
									<div
										style={{
											position: 'relative',
											justifyContent: 'flex-start',
											backgroundColor: 'white',
											borderRadius: 10,
											textAlign: 'justify',
											padding: 10,
											width: '100%',
											height: '100%'
										}}>
										<p>{e.description} </p>
									</div>
								)}
							</div>
						</button>
					))}

					<p
						className="header-title"
						style={{
							color: '#F59A42',
							size: 40,
							display: 'flex',
							alignItems: 'flex-start',
							width: '90%',
							margin: 'auto',
							fontWeight: 'bold',
							paddingTop: 20
						}}>
						Cooking task
					</p>

					{cooking.map((e, i) => (
						<button
							onClick={() => {
								this.setState({
									selectedCookingIndex: this.state.selectedCookingIndex === i ? null : i,
									selectDate: e
								});
							}}
							style={{
								backgroundColor: this.state.selectedCookingIndex === i ? '#FC5C20' : '#F59A42',
								width: '90%',
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								margin: 'auto',
								flexDirection: 'column'
							}}>
							<div>
								<img src={e.img} style={{ height: 60 }} />
								<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.title}</text>
								{this.state.selectedCookingIndex === i && (
									<div
										style={{
											position: 'relative',
											justifyContent: 'flex-start',
											backgroundColor: 'white',
											borderRadius: 10,
											textAlign: 'justify',
											padding: 10,
											width: '100%',
											height: '100%'
										}}>
										<p>{e.description} </p>
									</div>
								)}
							</div>
						</button>
					))}
					<p
						className="header-title"
						style={{
							color: '#BE46E7',
							size: 40,
							display: 'flex',
							alignItems: 'flex-start',
							width: '90%',
							margin: 'auto',
							fontWeight: 'bold',
							paddingTop: 20
						}}>
						Donation
					</p>

					{donation.map((e, i) => (
						<button
							onClick={() => {
								this.setState({
									selectedDonationIndex: this.state.selectedDonationIndex === i ? null : i,
									selectDate: e
								});
							}}
							style={{
								backgroundColor: this.state.selectedDonationIndex === i ? '#683470' : '#BE46E7',
								width: '90%',
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								margin: 'auto',
								flexDirection: 'column'
							}}>
							<div>
								<text
									style={{
										fontSize: 30,
										marginTop: 10,
										marginBottom: 10,
										padding: 15,
										color: 'white',
										fontWeight: 'bold'
									}}>
									{e.img}
								</text>
								<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.title}</text>
								{this.state.selectedDonationIndex === i && (
									<div
										style={{
											position: 'relative',
											justifyContent: 'flex-start',
											backgroundColor: 'white',
											borderRadius: 10,
											textAlign: 'justify',
											padding: 10,
											width: '100%',
											height: '100%'
										}}>
										<p>{e.description} </p>
									</div>
								)}
							</div>
						</button>
					))}
				</div>
				<p
					className="header-title"
					style={{
						color: '#F5A146',
						fontWeight: 'bold',
						paddingTop: 20,
						paddingBottom: 20,
						width: '80%',
						margin: 'auto'
					}}>
					Please, fill your personal details
				</p>
				<label style={{width:'70%', margin:'auto', display:'flex', flexDirection:'column',}}>
				<text className="header-title" style={{color: '#F5A146',textAlign:'left', fontWeight:'bold', fontSize: 20}}>	Full Name </text>
					<input type="text" style={{borderWidth:2, borderColor:"lightgray"}} value={this.state.name} onChange={(value) => this.setState({ name: value.target.value })} />
				</label>
				<label style={{width:'70%', margin:'auto', display:'flex', flexDirection:'column',}}>
				<text className="header-title" style={{color: '#F5A146',textAlign:'left', fontWeight:'bold', fontSize: 20}}>	Email </text>
					<input type="text" style={{borderWidth:2, borderColor:"lightgray"}} value={this.state.email} onChange={(value) => this.setState({ email: value.target.value })} />
				</label>
				<label style={{width:'70%', margin:'auto', display:'flex', flexDirection:'column',}}>
				<text className="header-title" style={{color: '#F5A146',textAlign:'left', fontWeight:'bold', fontSize: 20}}>	Phone </text>
					<input type="text" style={{borderWidth:2, borderColor:"lightgray", marginBottom:40}} value={this.state.phone} onChange={(value) => this.setState({ phone: value.target.value })} />
				</label>
				<button
					onClick={this.goToEnd}
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
					<text className="header-title-date" style={{ color: 'white', fontWeight: 'bold' }}>
						Next
					</text>
				</button>
				{this.state.err && (
					<text
						className="header-title"
						style={{ color: 'red', marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>
						{this.state.err}
					</text>
				)}
				<div style={{ height: 50 }} />
			</div>
		);
	}
	componentDidMount() {
		this.props.getGoogleSheet();
	}
}

const mapStateToProps = (state) => ({
	form: state.form
});

const mapDispatchToProps = {
	getGoogleSheet,
	goToHome,
	goToEnd,
	addOtherstoList
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
