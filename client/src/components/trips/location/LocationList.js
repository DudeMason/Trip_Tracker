import React, { Component } from 'react';
import { Header, Button, Grid, Segment, Container } from 'semantic-ui-react';
import Location from './Location';
import LocationForm from './LocationForm';

export default class LocationList extends Component {
	state = {locations: [], editing: false, adding: false, edit: false}

	componentDidMount() {
		this.setState({locations: this.state.locations})
	}

	removeLocation = (id) => {
		const {locations} = this.state
		this.setState({locations: locations.filter(l => l.id !== id)})
	}

	updateLocation = (id, location) => {
		const locations = this.state.locations.map(l => {
			if (l.id === id) {
				return location
			}

			return l
		})

		this.setState({locations})
	}

	addLocation = (location) => {
		const {locations} = this.state
		this.setState({locations: [...locations, location]})
	}

	toggleEditing = () => {
		this.setState({editing: !this.state.editing, edit: false})
	}

	toggleAdding = () => {
		this.setState({adding: !this.state.adding, editing: false})
	}

	toggleIt = () => {
		this.setState({edit: !this.state.edit})
	}

	render() {
		const {locations} = this.state;
		const {start, end, name} = this.props.location.state;

		return (
			<>
				<div>
					<Header as='h1' textAlign='center'>
						{name}
					</Header>

					<Container textAlign='center'>
						From {start} to {end}
					</Container>
				</div>

				<Grid columns='3' align='center' stackable>
					{locations.map(l =>
						<Grid.Column key={l.id}>
							<Location
								key={l.id} {...l}
								removeLocation={this.removeLocation}
								toggleEditing={this.toggleEditing}
								{...this.state}
								updateLocation={this.updateLocation}
								toggleIt={this.toggleIt}
							/>
						</Grid.Column>)}
				</Grid>
				{this.state.adding
				 ?
				 <>
					 <LocationForm addLocation={this.addLocation} toggleAdding={this.toggleAdding}/>
					 <Button onClick={this.toggleAdding} basic>Cancel</Button>
				 </>
				 :
				 <>
					 <br/>
					 <Segment compact>
						 <Button onClick={this.toggleAdding} color='green'>Add Location</Button>
						 <Button onClick={this.toggleEditing} color='blue'>Edit</Button>
					 </Segment>
				 </>
				}
			</>
		)
	}
}
