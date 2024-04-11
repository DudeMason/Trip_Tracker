import React, { Component } from 'react';
import { Header, Button, Grid, Segment } from 'semantic-ui-react';
import Address from './Address';
import AddressForm from './AddressForm';

export default class AddressList extends Component {
	state = {addresses: [], editing: false, adding: false, edit: false}

	componentDidMount() {
		this.setState({addresses: this.state.addresses})
	}

	removeAddress = (id) => {
		const {addresses} = this.state
		this.setState({addresses: addresses.filter(l => l.id !== id)})
	}

	updateAddress = (id, address) => {
		const addresses = this.state.addresses.map(a => {
			if (a.id === id) {
				return address
			}

			return a
		})

		this.setState({addresses})
	}

	addAddress = (address) => {
		const {addresses} = this.state
		this.setState({addresses: [...addresses, address]})
	}

	toggleEditing = () => {
		this.setState({editing: !this.state.editing, edit: false})
	}

	toggleAdding = () => {
		this.setState({adding: !this.state.adding, editing: false})
	}

	toggleIt = () => {
		this.setState({edit: !this.state.edit, editing: false})
	}

	render() {
		const {addresses} = this.state;
		const {name, days} = this.props.location.state;

		return (
			<>
				<div align='center'>
					<Header as='h1'>
						{name}
					</Header>
					<p>For {days} days</p>
					<br/>
				</div>

				<Grid columns='1' align='center' stackable>
					{addresses.map(a =>
						<Grid.Column key={a.id}>
							<Address
								key={a.id} {...a}
								removeAddress={this.removeAddress}
								toggleEditing={this.toggleEditing}
								{...this.state}
								updateAddress={this.updateAddress}
								toggleIt={this.toggleIt}
								toggleAdding={this.toggleAdding}
							/>
						</Grid.Column>)}
				</Grid>
				{this.state.adding
				 ?
				 <>
					 <AddressForm
						 addAddress={this.addAddress}
						 updateAddress={this.updateAddress}
						 toggleAdding={this.toggleAdding}
					 />
					 <Button onClick={this.toggleAdding} basic>Cancel</Button>
				 </>
				 :
				 <>
					 <br/>
					 <Segment compact>
						 <Button onClick={this.toggleAdding} color='green'>Add Address</Button>
						 <Button onClick={this.toggleEditing} color='blue'>Edit</Button>
					 </Segment>
				 </>
				}
			</>
		)
	}
}
