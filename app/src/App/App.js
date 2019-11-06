import React from 'react';
import './App.css';
import Answers from '../Answers/Answers'
import Form from '../Form/Form';
import AnswerInfo from '../AnswerInfo/AnswerInfo';
import {
    BrowserRouter as Router,
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
              <Route path={"/answer/:formId"} component={AnswerInfo}/>
              <Route path={"/"}>
                  <Redirect to={"/form"}/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
