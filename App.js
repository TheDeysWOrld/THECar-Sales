import './App.css';
import { React,useState } from 'react';
import Login from './components/login/login';
import Register from './components/register/register';
import {Route,Routes} from "react-router-dom";
// import Homepage from './components/homepage/homepage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [user, setLoginUser]=useState({})
  return (
    <div className="App">

      <Routes>
        <Route exact path='/'
          element={user && user._id ? <Dashboard setLoginUser={setLoginUser} user={user}/> : <Login setLoginUser={setLoginUser}/>} 
        />
        <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

      {/* <Dashboard setLoginUser={setLoginUser} user={user}/> */}
      
    </div>
  );
}

export default App;
