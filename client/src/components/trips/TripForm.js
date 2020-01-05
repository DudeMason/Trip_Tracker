import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

export default class TripForm extends Component {

  state = {name: '', start_date: undefined, end_date: undefined}

  componentDidMount() {
    if (this.props.id) {
      const {name, start_date, end_date} = this.props
      this.setState({
        name, start_date, end_date
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateTrip( this.props.id, this.state )
      this.props.toggleIt()
    } else {
      this.props.addTrip(this.state)
      this.props.toggleAdd()
    }
    this.setState({
      name: '',
      start_date: undefined,
      end_date: undefined
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }


  render() {

    const {name, start_date, end_date} = this.state

    return(

      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Name'
          />

          <Form.Input
            type='date'
            name='start_date'
            value={start_date}
            onChange={this.handleChange}
            label='Start Date'
          />

          <Form.Input
            type='date'
            name='end_date'
            value={end_date}
            onChange={this.handleChange}
            label='End Date'
          />
          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </>
    )
  }
}
