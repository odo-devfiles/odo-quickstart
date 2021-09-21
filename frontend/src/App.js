import logo from './logo.svg';
import './App.css';
import ListTodoComponent from './components/ListTodoComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="container w-25">
            <Switch>
                <Route path="/" exact component={ListTodoComponent}></Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
