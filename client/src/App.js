import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import './App.css';
import TripIndex from './components/trips/TripIndex';
import NoMatch from './components/shared/NoMatch';
import About from './components/shared/About';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import LocationList from './components/trips/location/LocationList';
import Address from './components/trips/location/address/Address';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';

const App = () => (

  <div className='backimg'>
    <Navbar/>
    <FetchUser>
      <Container className='wrapper'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <ProtectedRoute exact path='/trip' component={TripIndex}/>
          <ProtectedRoute exact path='/trip/:id/locations' component={LocationList} />
          <ProtectedRoute exact path='/location/:id/addresses' component={Address} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </FetchUser>
  </div>
)
export default App;
