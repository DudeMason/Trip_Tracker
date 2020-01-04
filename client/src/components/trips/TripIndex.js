import React, {Component} from 'react';
import {Container, Header, Button, Segment} from 'semantic-ui-react';
import TripForm from './TripForm';
import TripList from './TripList';
import axios from 'axios';

export default class TripIndex extends Component {

  state = {trips: [], adding: false, editing: false}

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => {
        this.setState({ trips: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  toggleAdd = () => {
    this.setState({ adding: !this.state.adding, editing: false})
  }

  removeTrip = (id) => {
    axios.delete(`/api/trips/${id}`)
      .then(res => {
        const {trips} = this.state
        this.setState({trips: trips.filter(t=> t.id !==id )})
      })
      .catch (err => {
        console.log(err)
      })
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing})
  }

  updateTrip = (id, trip) => {
    axios.put(`/api/trips/${id}`, trip)
      .then( res => {
        const trips = this.state.trips.map( t => {
          if (t.id === id)
          {return res.data}
          return t
        })
        this.setState({ trips })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addTrip = (trip) => {
    axios.post('/api/trips', trip)
      .then( res => {
        const { trips } = this.state
        this.setState({ trips: [...trips, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {

    return(

      <>
        <Header as='h1' textAlign='center'>
          Plan a Trip!
        </Header>
        <Container>
          <TripList trips={this.state.trips} removeTrip={this.removeTrip} updateTrip={this.updateTrip} editing={this.state.editing}/>
          {this.state.adding
          ?
          <>
            <TripForm addTrip={this.addTrip} toggleAdd={this.toggleAdd}/>
            <Button onClick={this.toggleAdd} basic>Hide</Button>
          </>
          :
          <Segment compact>
            <Button onClick={this.toggleAdd} color='green'>Add Trip</Button>
            <Button onClick={this.toggleEdit} color='blue'>Edit Trip</Button>
          </Segment>
          }
        </Container>
      </>
    )
  }
}
