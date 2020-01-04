import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import AddressForm from './address/AddressForm';
import Address from './address/Address';

export default class Location extends Component {

  render() {

    return(

      <>
        <Header as='h1' textAlign='center'>
          Location!
        </Header>
        <Container>

        </Container>
      </>
    )
  }
}
