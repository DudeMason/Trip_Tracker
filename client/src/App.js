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

const App = () => (

  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/trip' component={TripIndex}/>
        <Route exact path='/trip/:id/locations' component={LocationList} />
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>

)

export default App;
