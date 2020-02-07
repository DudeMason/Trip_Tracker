import React, {Component} from 'react';
import {Header, Button, Icon, List} from 'semantic-ui-react';
import TripForm from './TripForm';
import {Link} from 'react-router-dom';

export default class Trip extends Component {

  render() {

    const {id, name, auth, start_date, end_date, edit, toggleIt, removeTrip, editing} = this.props
    let startDate = new Date(`${start_date}`);
    let endDate = new Date(`${end_date}`);
    let start = parseInt(startDate.getUTCMonth()+1) +"/"+ startDate.getUTCDate() +"/"+startDate.getUTCFullYear();
    let end = parseInt(endDate.getUTCMonth()+1) +"/"+ endDate.getUTCDate() +"/"+endDate.getUTCFullYear();


    return(

      <>
        <div>
          <>
            {edit
            ?
            <div align='left'>
              <TripForm {...this.props} toggleIt={toggleIt}/>
            </div>
            :
            <>
              <Link to={{
                pathname: `/trip/${id}/locations`,
                state: {id, name, start, end}
              }}>
                <List selection size='large'>
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
                  <Button compact onClick={toggleIt} color='blue'>
                    <Icon name='pencil' />
                  </Button>

                  <Button compact onClick={() => removeTrip(auth.user.id, id)} color='red'>
                    <Icon name='trash' />
                  </Button>
                </>
                :
                null
              }

          </div>
        </>

    )
  }
}
