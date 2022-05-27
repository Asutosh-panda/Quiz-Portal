import React from 'react';
import { Switch,Route } from 'react-router-dom';
import "./App.css"
import Home from './Home'
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import QuestionPage from './QuestionPage';
import QuestionSet from './QuestionSet';
import Result  from './Result';
const App= ()=> {

  return (<>
      <Nav/>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/TeacherDashboard" component={TeacherDashboard}/>
        <Route exact path="/StudentDashboard" component={StudentDashboard}/>
        <Route exact path="/QuestionPage" component={QuestionPage}/>
        <Route exact path="/QuestionSet" component={QuestionSet}/>
        <Route exact path="/Result" component={Result}/>
        <Route path="/" component={Home}/>
      </Switch>
  </>
  );
}

export default App;
