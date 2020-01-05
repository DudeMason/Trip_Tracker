import React from 'react';
import {Header, Button} from 'semantic-ui-react';
import Sea from "./video/sea.mp4";
import {Link} from 'react-router-dom';

const Home = () => (

  <div style={{marginBottom: '100px'}}>
    <Header as='h1' textAlign='center'>
      Trip Planner!
    </Header>
    <video className="video" id="background-video" loop autoPlay>
      <source src={Sea} type="video/mp4" />
    </video>

    <Link to='/trip'>
      <Button fluid size='massive' color='blue' >Plan a Trip!</Button>
    </Link>

  </div>


)
export default Home;
