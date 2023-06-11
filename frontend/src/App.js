import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UserList from '../src/components/usersList';
import AddUser from '../src/components/addUser';
import UpdateUser from '../src/components/updateUser';
import UserTableList from './components/userTableList';


function App() {
  return (
    <Router>
      <div>
        <h1>Users Management</h1>
        <Routes>
          
          <Route exact path="/" element={<UserList/>}></Route>
          <Route exact path='/adduser' element={<AddUser/>}></Route>
          <Route exact path='/updateuser/:id' element={<UpdateUser/>}></Route>

          <Route exact path="/usertableview" element={<UserTableList/>}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;