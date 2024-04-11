import React, { Component } from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react';
import TripForm from './TripForm';
import TripList from './TripList';

class TripIndex extends Component {
	state = {trips: [], adding: false, editing: false, edit: false}

	toggleAdd = () => {
		this.setState({adding: !this.state.adding, editing: false})
	}

	removeTrip = (tripId) => {
		const {trips} = this.state
		this.setState({trips: trips.filter(t => t.id !== tripId)})
	}

	toggleEdit = () => {
		this.setState({editing: !this.state.editing, edit: false})
	}

	updateTrip = (tripId, trip) => {
		const trips = this.state.trips.map(t => {
			if (t.id === tripId) {
				return trip
			}

			return t
		})

		this.setState({trips})
	}

	addTrip = (trip) => {
		const {trips} = this.state
		this.setState({trips: [...trips, trip]})
	}

	toggleIt = () => {
		this.setState({edit: !this.state.edit})
	}

	render() {
		const {auth} = this.props
		const {adding} = this.state

		return (
			<>
				<Header as='h1' textAlign='center'>
					Plan a Trip!
				</Header>
				<Container>
					<TripList
						trips={this.state.trips}
						auth={auth}
						toggleIt={this.toggleIt}
						removeTrip={this.removeTrip}
						updateTrip={this.updateTrip}
						{...this.state}
					/>
					{adding
					 ?
					 <>
						 <Segment>
							 <TripForm addTrip={this.addTrip} auth={auth} toggleAdd={this.toggleAdd}/>
							 <Button onClick={this.toggleAdd} basic>Cancel</Button>
						 </Segment>
					 </>
					 :
					 <Segment compact>
						 <Button onClick={this.toggleAdd} color='green'>Add Trip</Button>
						 <Button onClick={this.toggleEdit} color='blue'>Edit Trip</Button>
					 </Segment>
					}
				</Container>
			</>
		)
	}
}

export default class ConnectedTripIndex extends Component {
	render() {
		return <TripIndex {...this.props}/>
	}
}
