import React, {Component} from 'react';
import {Segment, Button, Icon, List, Header} from 'semantic-ui-react';
import LocationForm from './LocationForm';
import {Link} from 'react-router-dom';

export default class Location extends Component {

  state = {edit: false}

  toggleHer= () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {id, name, days, editing, removeLocation, updateLocation} = this.props

    return(

      <Segment compact textAlign="center" size='big'>
        {this.state.edit
        ?
        <>
          <Button onClick={this.toggleHer} color='blue' compact>
            <Icon name='minus'/>
          </Button>

          <Button onClick={() => removeLocation(id)} color='red'>
            <Icon name='trash' />
          </Button>

          <LocationForm {...this.props} toggleHer={this.toggleHer} updateLocation={updateLocation}/>
        </>
        :
        <>
          <Link to={{
            pathname: `/location/${id}/addresses`,
            state: {id, name, days}
          }}>
            <List selection>
              <List.Item>
                <Header>{name}</Header>
                <p style={{fontSize: 12, color: 'black' }}>For {days} days</p>
              </List.Item>
            </List>
          </Link>
            {editing
              ?
              <>
                <Button compact onClick={this.toggleHer} color='blue'>
                  <Icon name='pencil' />
                </Button>

                <Button compact onClick={() => removeLocation(id)} color='red'>
                  <Icon name='trash' />
                </Button>
              </>
              :
              null
            }
        </>
        }
      </Segment>
    )
  }
}
