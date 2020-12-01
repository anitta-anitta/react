import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Transcationhistory from './Transcationhistory';
import Users from './Users';
import{
  BrowserRouter,
  Switch,
  Route,
  Link 
}
from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      
       <BrowserRouter>
       <div>
         <Link to="/" exact={true}>Login/</Link>
         <Link to="/home">Home/</Link>
         <Link to="register/">Register/</Link>
         
       </div>

       <div className="App">
         <Switch>
          <Route path="/" exact={true}>
            <Login/>
          </Route>
          <Route path="/home">
            <Home/>
           </Route>
           <Route path="/register">
            <Register/>
           </Route>
           <Route path="/history">
            <Transcationhistory/>
           </Route>
           <Route path="/users">
            <Users/>
           </Route>
           </Switch>
           </div>
           </BrowserRouter>
    )
  }
}

export default App;
