import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router,Route,Switch}  from  'react-router-dom' 

import StudentComponent from './component/StudentComponent';
import GradeComponent from './component/GradeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateStudentomponent from './component/CreateStudentomponent';
import UpdateStudentComponent from './component/UpdateStudentComponent';
import CreateGradeComponent from './component/CreateGradeComponent';
import UpdateGradeComponent from './component/UpdateGradeComponent';


function App() {
  return (
    <div>
    <Router>
      <HeaderComponent/>
             <div className="container">
            <Switch>
              <Route path="/" exact component={StudentComponent}></Route>
              <Route path="/students" component={StudentComponent}></Route>
              <Route path="/add-student" component={CreateStudentomponent}></Route>
              <Route path="/update-student/:id" component={UpdateStudentComponent}></Route>
 
              <Route path="/grades" component={GradeComponent}></Route>
              <Route path="/add-grade" component={CreateGradeComponent}></Route>
              <Route path="/update-grade/:id" component={UpdateGradeComponent}></Route>
              
            </Switch>
             
          </div>
        
    </Router>
   
    </div>
    
  );
}

export default App;
