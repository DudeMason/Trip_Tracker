import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

class Navbar extends React.Component {
	render() {
		return (
			<Menu size='mini' stackable icon='labeled'>
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
							<Icon name='question circle outline' color='violet'/>
							About
						</Menu.Item>
					</Link>
				</Menu.Menu>
			</Menu>
		)
	}
}

export class ConnectedNavbar extends React.Component {
	render() {
		return <Navbar {...this.props}/>
	}
}

export default withRouter(ConnectedNavbar);
