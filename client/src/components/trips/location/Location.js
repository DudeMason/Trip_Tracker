import React, {Component} from 'react';
import {Segment, Button, Rail, Icon} from 'semantic-ui-react';
import AddressForm from './address/AddressForm';
import Address from './address/Address';
import LocationForm from './LocationForm';

export default class Location extends Component {

  state = {edit: false}

  toggleHer= () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {id, name, days, editing, toggleEditing, removeLocation, updateLocation} = this.props

    return(

      <Segment compact textAlign="center" href=''>
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
          <p>Location Name</p>
          <p>{name}</p>
          <p>For {days} days</p>

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
