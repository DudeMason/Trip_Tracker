import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Trip from './Trip';

export default class TripList extends Component {
	render() {

		const {trips} = this.props

		return (
			<>
				<Segment style={{padding: 30}}>
					<Grid columns='2' align='center' stackable celled>
						{trips.map(t =>

							<Grid.Column key={t.id}>
								<Trip key={t.id} {...t} {...this.props}/>
							</Grid.Column>
						)}
					</Grid>
				</Segment>
			</>
		)
	}
}
