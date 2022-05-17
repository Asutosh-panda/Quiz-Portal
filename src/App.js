import React from 'react';
import { Switch,Route } from 'react-router-dom';
import "./App.css"
import Home from './Home'
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import StudentDashboard from './StudentDashboard';
import QuestionPage from './QuestionPage';

const App= ()=> {

  return (<>
      <Nav/>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/StudentDashboard" component={StudentDashboard}/>
        <Route exact path="/QuestionPage" component={QuestionPage}/>
        <Route path="/" component={Home}/>
      </Switch>
  </>
  );
}

export default App;
