import React, {Component} from 'react';
import { Header, Button, Grid, Segment } from 'semantic-ui-react';
import Address from './Address';
import axios from 'axios';
import AddressForm from './AddressForm';

export default class AddressList extends Component {

  state = {addresses: [], editing: false, adding: false, edit: false}

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
        this.setState({addresses: addresses.filter(l => l.id !==id )})
      })
      .catch (err => {
        console.log(err)
      })
  }

  updateAddress = (id, address) => {
    axios.put(`/api/locations/${this.props.location.state.id}/addresses/${id}`, address)
      .then( res => {
        const addresses = this.state.addresses.map( l => {
          if (l.id === id)
          {return res.data}
          return l
        })
        this.setState({ addresses })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addAddress = (address) => {
    axios.post(`/api/locations/${this.props.location.state.id}/addresses`, address)
      .then( res => {
        const { addresses } = this.state
        this.setState({ addresses: [...addresses, res.data]})
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
    this.setState({edit: !this.state.edit, editing: false})
  }


  render() {

    const {addresses} = this.state;
    const { name, days } = this.props.location.state;

    return(

      <>
        <div align='center'>
          <Header as='h1'>
            {name}
          </Header>
          <p>For {days} days</p>
          <br/>
        </div>

        <Grid columns='1' align='center'>
          {addresses.map(a =>
            <Grid.Column key={a.id}>
              <Address key={a.id} {...a}
                removeAddress={this.removeAddress}
                toggleEditing={this.toggleEditing}
                {...this.state}
                updateAddress={this.updateAddress}
                toggleIt={this.toggleIt}
                toggleAdding={this.toggleAdding}
                />
            </Grid.Column>)}
        </Grid>
        {this.state.adding
          ?
          <>
            <AddressForm addAddress={this.addAddress} updateAddress={this.updateAddress} toggleAdding={this.toggleAdding} />
            <Button onClick={this.toggleAdding} basic>Hide</Button>
          </>
          :
          <>
          <br/>
            <Segment compact>
              <Button onClick={this.toggleAdding} color='green'>Add Address</Button>
              <Button onClick={this.toggleEditing} color='blue'>Edit</Button>
            </Segment>
          </>
        }
      </>
    )
  }
}
