import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';
import { AuthConsumer } from "../../providers/AuthProvider";

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {

    return(
      <Menu size='massive'>

        <Link to='/'>
          <Menu.Item>
            <Icon className='planeCrash' name='plane' color='blue'/>
            Home
          </Menu.Item>
        </Link>

        <Link to='/trip'>
          <Menu.Item>
            <Icon className='mapCrunch' name='map outline'/>
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
          { this.rightNavItems() }
        </Menu.Menu>

      </Menu>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
