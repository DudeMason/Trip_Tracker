import React, {Component} from 'react';
import {Container, Header, Button, Segment} from 'semantic-ui-react';
import TripForm from './TripForm';
import TripList from './TripList';
import axios from 'axios';
import { AuthConsumer } from "../../providers/AuthProvider";

class TripIndex extends Component {

  state = {trips: [], adding: false, editing: false}

  componentDidMount() {
    axios.get(`/api/users/${this.props.auth.id}/trips`)
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

  removeTrip = (user_id, id) => {
    axios.delete(`/api/users/${user_id}/trips/${id}`)
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

  updateTrip = (user_id, id, trip) => {
    axios.put(`/api/users/${user_id}/trips/${id}`, trip)
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

  addTrip = (user_id, trip) => {
    axios.post(`/api/users/${user_id}/trips`, trip)
      .then( res => {
        const { trips } = this.state
        this.setState({ trips: [...trips, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {

    const{auth} = this.props

    return(

      <>
        <Header as='h1' textAlign='center'>
          Plan a Trip!
        </Header>
        <Container>
          <TripList trips={this.state.trips} auth={auth} removeTrip={this.removeTrip} updateTrip={this.updateTrip} editing={this.state.editing}/>
          {this.state.adding
          ?
          <>
            <TripForm addTrip={this.addTrip}  auth={auth} toggleAdd={this.toggleAdd}/>
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

export default class ConnectedTripIndex extends Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <TripIndex {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
