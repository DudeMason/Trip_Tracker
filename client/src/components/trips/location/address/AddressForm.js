import React, {Component} from 'react';
import { Form, Input, Button, } from 'semantic-ui-react';

export default class AddressForm extends Component {

  state = {street: '', city: '', state: '', zip: null}

  componentDidMount() {
    if (this.props.id) {
      const {street, city, state, zip} = this.props
      this.setState({
        street, city, state, zip
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateAddress( this.props.id, this.state )
      this.props.toggleEdit()
    } else {
      this.props.addAddress(this.state)
      this.props.toggleEdit()
    }
    this.setState({
      street: '',
      city: '',
      state: '',
      zip: null
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  render() {

    const{street, city, state, zip} = this.state

    return(

      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            control={Input}
            name='street'
            value={street}
            onChange={this.handleChange}
            label='Street'
            placeholder={street}/>

          <Form.Group>
            <Form.Field
              control={Input}
              name='city'
              value={city}
              onChange={this.handleChange}
              label='City'
              placeholder={city}
              width={5}/>

            <Form.Field
              control={Input}
              name='state'
              value={state}
              onChange={this.handleChange}
              label='State'
              placeholder={state}/>

            <Form.Field
              control={Input}
              name='zip'
              value={zip}
              onChange={this.handleChange}
              label='Zip'
              placeholder={zip}/>
          </Form.Group>

          <Form.Field
            control={Button}
            content='Submit'
            type='submit'
            color='green'/>
        </Form>
      </>
    )
  }
}
