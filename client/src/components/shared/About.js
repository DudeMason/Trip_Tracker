import React from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';

const About = () => (
	<Container style={{paddingBottom: 200}}>
		<br/>
		<Header as='h1'>
			About Us
		</Header>

		<Segment compact size='huge'>
			We built this app from scratch! We are cool dudes from DevPoint Labs, in Utah.
		</Segment>
	</Container>
)

export default About;
