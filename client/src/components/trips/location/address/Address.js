import React, { Component } from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import AddressForm from './AddressForm';

export default class Address extends Component {
	render() {

		const {id, street, city, state, zip, editing, edit, toggleIt, removeAddress, updateAddress, toggleAdding} = this.props

		return (
			<Segment compact textAlign="center" size='big'>
				{edit
				 ?
				 <>
					 <Button onClick={toggleIt} color='blue' compact>
						 <Icon name='pencil'/>
					 </Button>

					 <Button onClick={() => removeAddress(id)} color='red'>
						 <Icon name='trash'/>
					 </Button>

					 <AddressForm {...this.props} toggleIt={toggleIt} toggleAdding={toggleAdding} updateAddress={updateAddress}/>
				 </>
				 :
				 <>
					 <div>
						 <br/>
						 {street}
						 <br/>
						 {city}, {state}
						 <br/>
						 {zip}
					 </div>
					 {editing
						?
						<>
							<Button compact onClick={toggleIt} color='blue'>
								<Icon name='pencil'/>
							</Button>

							<Button compact onClick={() => removeAddress(id)} color='red'>
								<Icon name='trash'/>
							</Button>
						</>
						:
						null
					 }
				 </>
				}
			</Segment>
		)
	}
}
