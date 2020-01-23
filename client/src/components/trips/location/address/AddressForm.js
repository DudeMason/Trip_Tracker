import React, {Component} from 'react';
import { Form, Input, Button, } from 'semantic-ui-react';

export default class AddressForm extends Component {

  state = {street: '', city: '', state: '', zip: ''}

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
      this.props.toggleIt()
    } else {
      this.props.addAddress(this.state)
      this.props.toggleAdding()
    }
    this.setState({
      street: '',
      city: '',
      state: '',
      zip: ''
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
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            control={Input}
            name='street'
            value={street}
            onChange={this.handleChange}
            label='Street'
          />

          <Form.Group>
            <Form.Field
              control={Input}
              name='city'
              value={city}
              onChange={this.handleChange}
              label='City'
            />

            <Form.Field
              control={Input}
              name='state'
              value={state}
              onChange={this.handleChange}
              label='State'
            />

            <Form.Field
              control={Input}
              name='zip'
              value={zip}
              onChange={this.handleChange}
              label='Zip'
            />
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
