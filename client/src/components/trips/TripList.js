import React, {Component} from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import Trip from './Trip';

export default class TripList extends Component {

  render() {

    const {removeTrip, trips, updateTrip, editing} = this.props

    return(

      <>
        <Segment style={{padding: 30}}>
          <Grid columns='3' align='center' divided stackable>
          {trips.map(t =>

              <Grid.Column key={t.id}>
                <Trip key={t.id} updateTrip={updateTrip} removeTrip={removeTrip} {...t} editing={editing}/>
              </Grid.Column>

            )}
          </Grid>
        </Segment>
      </>
    )
  }
}
