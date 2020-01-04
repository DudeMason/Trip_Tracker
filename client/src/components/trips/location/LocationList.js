import React, {Component} from 'react';
import {Container, Header, Button, Grid, Segment} from 'semantic-ui-react';
import Location from './Location';
import axios from 'axios';
import LocationForm from './LocationForm';

export default class LocationList extends Component {

  state = {locations: [], editing: false, adding: false}

  componentDidMount() {
    axios.get(`/api/trips/${this.props.location.state.id}/locations`)
      .then( res => {
        this.setState({ locations: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  removeLocation = (id) => {
    axios.delete(`/api/trips/${this.props.location.state.id}/locations/${id}`)
      .then(res => {
        const {locations} = this.state
        this.setState({locations: locations.filter(l => l.id !==id )})
      })
      .catch (err => {
        console.log(err)
      })
  }

  updateLocation = (id, location) => {
    axios.put(`/api/trips/${this.props.location.state.id}/locations/${id}`, location)
      .then( res => {
        const locations = this.state.locations.map( l => {
          if (l.id === id)
          {return res.data}
          return l
        })
        this.setState({ locations })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addLocation = (location) => {
    axios.post(`/api/trips/${this.props.location.state.id}/locations`, location)
      .then( res => {
        const { locations } = this.state
        this.setState({ locations: [...locations, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  }

  toggleAdding = () => {
    this.setState({adding: !this.state.adding, editing: false})

  }


  render() {

    const {locations} = this.state

    return(

      <>
        <Header as='h1' textAlign='center'>
          {this.props.location.state.name}
        </Header>
        <Grid columns='3' align='center'>
          {locations.map(l =>
            <Grid.Column>
              <Location key={l.id} {...l} removeLocation={this.removeLocation} toggleEditing={this.toggleEditing} editing={this.state.editing} updateLocation={this.updateLocation}/>
            </Grid.Column>)}
        </Grid>
        {this.state.adding
          ?
          <>
            <LocationForm addLocation={this.addLocation} toggleAdding={this.toggleAdding} />
            <Button onClick={this.toggleAdding} basic>Hide</Button>
          </>
          :
          <Segment compact>
            <Button onClick={this.toggleAdding} color='green'>Add Location</Button>
            <Button onClick={this.toggleEditing} color='blue'>Edit</Button>
          </Segment>
        }
      </>
    )
  }
}
