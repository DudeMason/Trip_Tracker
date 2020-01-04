import React, {Component} from 'react';
import {Segment, Header, Grid} from 'semantic-ui-react';
import Trip from './Trip';

export default class TripList extends Component {

  render() {

    const {removeTrip, trips, updateTrip, editing} = this.props

    return(

      <>
        <Segment>
          <Grid columns='3' align='center' divided>
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
