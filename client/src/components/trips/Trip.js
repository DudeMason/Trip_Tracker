import React, {Component} from 'react';
import {Header, Button, Icon, Container, List} from 'semantic-ui-react';
import TripForm from './TripForm';
import {Link} from 'react-router-dom';

export default class Trip extends Component {

  state = {edit: false}

  toggleIt = () => {
    this.setState({edit: !this.state.edit})
  }

  render() {

    const {id, name, start_date, end_date, removeTrip, editing} = this.props
    let startDate = new Date(`${start_date}`);
    let endDate = new Date(`${end_date}`);
    let start = parseInt(startDate.getUTCMonth()+1) +"/"+ startDate.getUTCDate() +"/"+startDate.getUTCFullYear();
    let end = parseInt(endDate.getUTCMonth()+1) +"/"+ endDate.getUTCDate() +"/"+endDate.getUTCFullYear();

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
                state: {id, name, start, end}
              }}>
                <List divided selection size='large'>
                  <List.Item>
                    <List.Content>
                      <Header as='h3'>
                        {name}
                      </Header>
                    </List.Content>

                    <List.Content>
                      <p style={{color: 'black', fontSize: 12}}>
                        From: {start}
                      </p>
                    </List.Content>

                    <List.Content>
                      <p style={{color: 'black', fontSize: 12}}>
                        To: {end}
                      </p>
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
        </>

    )
  }
}
