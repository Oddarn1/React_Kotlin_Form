import React from 'react';
import './App.css';
import Answers from '../Answers/Answers'
import Form from '../Form/Form';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={"/form"}>
                  <Form/>
              </Route>
              <Route path={"/answers"}>
                  <Answers/>
              </Route>
              <Route path={"/"}>
                  <Redirect to={"/form"}/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
