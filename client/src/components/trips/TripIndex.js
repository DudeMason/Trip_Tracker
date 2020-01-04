import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import TripForm from './TripForm';
import TripList from './TripList';

export default class TripIndex extends Component {

  state = {trips: []}

  componentDidMount() {
    
  }

  render() {

    return(

      <>
        <Header as='h1' textAlign='center'>
          Trip Planner!
        </Header>
        <Container>

        </Container>
      </>
    )
  }
}
