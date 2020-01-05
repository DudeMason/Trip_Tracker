import React, {Component} from 'react';
import {Header, Button, Icon, Divider, Container, List} from 'semantic-ui-react';
import TripForm from './TripForm';
import {Link} from 'react-router-dom';

export default class Trip extends Component {

  state = {edit: false}

  toggleIt = () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {id, name, start_date, end_date, removeTrip, editing} = this.props

    return(

      <>
        <Container>
          <>
            {this.state.edit
            ?
            <>
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
                        {name}
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
