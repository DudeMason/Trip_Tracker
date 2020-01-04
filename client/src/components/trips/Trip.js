import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import LocationForm from './location/LocationForm';
import LocationList from './location/LocationList';

export default class Trip extends Component {

  render() {

    return(

      <>
        <Header as='h1' textAlign='center'>
          Trip!
        </Header>
        <Container>

        </Container>
      </>
    )
  }
}
