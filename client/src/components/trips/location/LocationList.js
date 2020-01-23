import React, {Component} from 'react';
import {Header, Button, Grid, Segment, Container} from 'semantic-ui-react';
import Location from './Location';
import axios from 'axios';
import LocationForm from './LocationForm';

export default class LocationList extends Component {

  state = {locations: [], editing: false, adding: false, edit: false}

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
    this.setState({editing: !this.state.editing, edit: false})
  }

  toggleAdding = () => {
    this.setState({adding: !this.state.adding, editing: false})
  }

  toggleIt= () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {locations} = this.state;
    const {start, end, name} = this.props.location.state;

    return(

      <>
        <div>
          <Header as='h1' textAlign='center'>
            {name}
          </Header>

          <Container textAlign='center'>
            From {start} to {end}
          </Container>
        </div>

        <Grid columns='3' align='center' stackable>
          {locations.map(l =>
            <Grid.Column key={l.id}>
              <Location key={l.id} {...l}
                removeLocation={this.removeLocation}
                toggleEditing={this.toggleEditing}
                {...this.state}
                updateLocation={this.updateLocation}
                toggleIt={this.toggleIt}
              />
            </Grid.Column>)}
        </Grid>
        {this.state.adding
          ?
          <>
            <LocationForm addLocation={this.addLocation} toggleAdding={this.toggleAdding} />
            <Button onClick={this.toggleAdding} basic>Hide</Button>
          </>
          :
          <>
          <br/>
            <Segment compact>
              <Button onClick={this.toggleAdding} color='green'>Add Location</Button>
              <Button onClick={this.toggleEditing} color='blue'>Edit</Button>
            </Segment>
          </>
        }
      </>
    )
  }
}
