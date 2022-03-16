import './App.css';
import Activity from "./pages/activity/Activity";
import { Link, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Route path='/home' component={Home}/>
      <Route path='/client' component={Client}/>
      <Route path='/activity' component={Activity}/>
    </>
);
}

const Home = () => (
  <div>
    <h1>Home</h1>
    <hr/>
      <Link to='/client'>Cliente</Link>
  </div>
);

const Client = () => (
  <div>
    <h1>Cliente</h1>
    <hr/>
    <Link to='/home'>Home</Link>
  </div>
);