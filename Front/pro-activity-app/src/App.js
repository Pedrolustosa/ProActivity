import './App.css';
import Activity from "./pages/activity/Activity";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function App() {
  return (
  <>
    <Router>
      <Route path='/home' component={Home}></Route>
      <Route path='/cliente' component={Client}></Route>
      <Route path='/activity' component={Activity}></Route>
    </Router>

    <Activity/>
  </>
  )
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)
const Client = () => (
  <div>
    <h1>Cliente</h1>
  </div>
)