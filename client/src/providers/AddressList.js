import React, {Component} from 'react';
import {Segment, Header, Button} from 'semantic-ui-react';
import axios from 'axios';
import AddressForm from './AddressForm';

export default class AddressList extends Component {

  state = {addresses: [], edit: false}

  componentDidMount() {
    axios.get(`/api/locations/${this.props.location.state.id}/addresses`)
      .then( res => {
        this.setState({ addresses: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  removeAddress = (id) => {
    axios.delete(`/api/locations/${this.props.location.state.id}/addresses/${id}`)
      .then(res => {
        const {addresses} = this.state
        this.setState({addresses: addresses.filter(a => a.id !== id )})
        this.toggleEdit()
      })
      .catch (err => {
        console.log(err)
      })
  }

  updateAddress = (id, address) => {
    axios.put(`/api/locations/${this.props.location.state.id}/addresses/${id}`, address)
      .then( res => {
        this.setState({addresses: [address]})
      })
      .catch(err => {
        console.log(err)
      })
  }

  addAddress = (address) => {
    axios.post(`/api/locations/${this.props.location.state.id}/addresses`, address)
      .then( res => {
        this.setState({ addresses: [res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  toggleEdit= () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {name, days} = this.props.location.state
    const {addresses} = this.state

    return(

      <>
        <div align='center'>
          <Header as='h1'>
            {name}
          </Header>
          <p>For {days} days</p>
        </div>

        {this.state.edit
        ?
          <Segment>
            <AddressForm address={this.state.addresses[0]} toggleEdit={this.toggleEdit} added={this.state.added} updateAddress={this.updateAddress} addAddress={this.addAddress} />
            <Button onClick={this.toggleEdit} basic color='blue'>Hide</Button>
            <Button onClick={() => this.removeAddress(addresses[0].id)} color='red'>Delete Address</Button>
          </Segment>
        :
          <>
            <Segment>
              {this.state.addresses.map(
                a =>
                <div key={a.id}>
                  {a.street}
                  <br/>
                  {a.city},
                  {` ${a.state}`}
                  <br/>
                  {a.zip}
                  <br/>
                </div>
              )}
            </Segment>
            <Button onClick={this.toggleEdit} color='blue'>Edit Address</Button>
          </>
        }
      </>
    )
  }
}
