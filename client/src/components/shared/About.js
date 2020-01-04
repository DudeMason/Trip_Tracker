import React from 'react';
import {Header, Segment, Container} from 'semantic-ui-react';

const About = () => (

  <Container>
    <Header as='h1'>
      About Us
    </Header>

    <Segment compact size='huge'>
      We friggin' built this, bruv. We are cool dudes from DevPoint Labs.
    </Segment>
  </Container>
)

export default About;
