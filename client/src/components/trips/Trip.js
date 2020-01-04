import React, {Component} from 'react';
import {Segment, Header, Button, Icon, Divider, Container, List} from 'semantic-ui-react';
import LocationForm from './location/LocationForm';
import LocationList from './location/LocationList';
import TripForm from './TripForm';
import {Link} from 'react-router-dom';

export default class Trip extends Component {

  state = {edit: false}

  toggleIt = () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {id, name, start_date, end_date, removeTrip, updateTrip, editing} = this.props

    return(

      <>
        <Container>
          <>
            {this.state.edit
            ?
            <>
            <Button onClick={() => this.toggleIt()} color='blue' compact>
              <Icon name='minus'/>
            </Button>

            <Button onClick={() => this.removeTrip(id)} color='red'>
              <Icon name='trash' />
            </Button>

            <TripForm {...this.props} toggleIt={this.toggleIt}/>

            </>
            :
            <>
              <Link to={{
                pathname: `/trip/${id}/locations`,
                state: {id, name, start_date, end_date}
              }}>
                <List divided size='large'>
                  <List.Item>
                    <List.Content>
                      <Header as='h3'>
                        Trip: {name}
                      </Header>
                    </List.Content>

                    <List.Content>
                      From: {start_date.split('T00:00:00.000Z')}
                    </List.Content>

                    <List.Content>
                      To: {end_date.split('T00:00:00.000Z')}
                    </List.Content>
                  </List.Item>
                </List>
              </Link>
            </>

            }
          </>

              {editing
                ?
                <>
                  <Button compact onClick={() => this.toggleIt()} color='blue'>
                    <Icon name='pencil' />
                  </Button>

                  <Button compact onClick={() => removeTrip(id)} color='red'>
                    <Icon name='trash' />
                  </Button>
                </>
                :
                null
              }

            </Container>
          <Divider/>
        </>

    )
  }
}
