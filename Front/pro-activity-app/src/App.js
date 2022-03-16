import './App.css';
import { Switch, Route } from 'react-router-dom';
import Client from './pages/client/Client';
import Activity from "./pages/activity/Activity";
import Dashboard from './pages/dashboard/Dashboard';

export default function App() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/client' component={Client}/>
      <Route path='/activity' component={Activity}/>
    </Switch>
  );
}