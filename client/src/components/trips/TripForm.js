import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default class TripForm extends Component {
	state = {name: '', start_date: '', end_date: ''}

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
			this.props.updateTrip(this.props.auth.user.id, this.props.id, this.state)
			this.props.toggleIt()
		} else {
			this.props.addTrip(this.props.auth.user.id, this.state)
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
		this.setState({[name]: value})
	}

	render() {

		let {name, start_date, end_date} = this.state
		const {start, end} = this.props

		if (start && end) {
			start_date = start
			end_date = end
		}

		return (
			<>
				<br/>
				<Form onSubmit={this.handleSubmit}>
					<Form.Input
						name='name'
						value={name}
						onChange={this.handleChange}
						width={9}
						label='Name'
					/>

					<Form.Input
						type='date'
						name='start_date'
						value={start_date}
						onChange={this.handleChange}
						label='Start Date'
						width={7}
						required
					/>

					<Form.Input
						type='date'
						name='end_date'
						value={end_date}
						onChange={this.handleChange}
						label='End Date'
						width={7}
						required
					/>
					<Button type='submit' color='green'>Submit</Button>
				</Form>
			</>
		)
	}
}
