import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';

const Navbar = () => (

  <Menu>

    <Link to='/'>
      <Menu.Item>
        <Icon name='plane' color='blue'/>
        Home
      </Menu.Item>
    </Link>

    <Link to='/about'>
      <Menu.Item>
        <Icon name='question circle outline' color='green'/>
        About
      </Menu.Item>
    </Link>

  </Menu>
)

export default Navbar;
