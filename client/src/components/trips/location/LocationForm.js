import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';

export default class LocationForm extends Component {

  state = {name: '', days: ''}

  componentDidMount() {
    if (this.props.id) {
      const {name, days} = this.props
      this.setState({
        name, days
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateLocation( this.props.id, this.state )
      this.props.toggleHer()
    } else {
      this.props.addLocation(this.state)
      this.props.toggleAdding()
    }
    this.setState({
      name: '',
      days: null
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  render() {

    const{name, days} = this.state

    return(

      <>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Name'
          />
          <Form.Input
            name='days'
            value={days}
            onChange={this.handleChange}
            label='Days'
          />

          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </>
    )
  }
}
