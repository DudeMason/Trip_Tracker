import React, {Component} from 'react';
import {Segment, Header, Button} from 'semantic-ui-react';
import axios from 'axios';
import AddressForm from './AddressForm';

export default class Address extends Component {

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
        this.setState({addresses: addresses.filter(a => a.id !==id )})
      })
      .catch (err => {
        console.log(err)
      })
  }

  updateAddress = (id, address) => {
    axios.put(`/api/locations/${this.props.location.state.id}/addresses/${id}`, address)
      .then( res => {
        const addresses = this.state
        this.setState({addresses: [address]})
      })
      .catch(err => {
        console.log(err)
      })
  }

  addAddress = (address) => {
    axios.post(`/api/locations/${this.props.location.state.id}/addresses`, address)
      .then( res => {
        const { addresses } = this.state
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

    return(

      <>
        <Header as='h1' textAlign='center'>
          {name}
        </Header>

        {this.state.edit
        ?
          <Segment>
            <AddressForm addresses={this.state.addresses} toggleEdit={this.toggleEdit} edit={this.state.edit} updateAddress={this.updateAddress} addAddress={this.addAddress} />
            <Button onClick={this.toggleEdit} basic color='blue'>Hide</Button>
            <Button onClick={() => this.removeAddress()} color='red'>Delete Address</Button>
          </Segment>
        :
          <>
            <Segment>
              {this.state.addresses.map(
                a =>
                <>
                  {a.street}
                  <br/>
                  {a.city},
                  {` ${a.state}`}
                  <br/>
                  {a.zip}
                </>
              )}
            </Segment>
            <Button onClick={this.toggleEdit} color='blue'>Edit Address</Button>
          </>
        }
      </>
    )
  }
}
