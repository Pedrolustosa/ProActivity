import './App.css';
import { Switch, Route } from 'react-router-dom';
import Client from './pages/client/Client';
import Activity from "./pages/activity/Activity";
import Dashboard from './pages/dashboard/Dashboard';
import ClientForm from './pages/client/ClientForm';

export default function App() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/activity/list' component={Activity}/>
      <Route path='/client/list' component={Client}/>
      <Route path='/client/detail/:id?' component={ClientForm}/>
    </Switch>
  );
}