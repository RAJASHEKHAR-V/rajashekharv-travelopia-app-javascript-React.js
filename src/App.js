import {Switch, Route} from 'react-router-dom'

import TravelopiaHome from './components/TravleopiaHome'
import Admin from './components/Admin'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={TravelopiaHome} />
    <Route exact path="/admin" component={Admin} />
  </Switch>
)

export default App
