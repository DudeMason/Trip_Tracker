import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';

const Navbar = () => (

  <Menu size='massive'>

    <Link to='/'>
      <Menu.Item>
        <Icon className='planeCrash' name='plane' color='blue'/>
        Home
      </Menu.Item>
    </Link>

    <Link to='/trip'>
      <Menu.Item>
        <Icon name='map outline'/>
        Plan a Trip
      </Menu.Item>
    </Link>

    <Menu.Menu position='right'>
      <Link to='/about'>
        <Menu.Item>
          <Icon name='question circle outline' color='green'/>
          About
        </Menu.Item>
      </Link>
    </Menu.Menu>

  </Menu>
)

export default Navbar;
