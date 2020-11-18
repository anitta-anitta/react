import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import { withRouter } from 'react-router';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Home';


class Login extends React.Component{
  state={
    username:"",
    password:" "
  }
  
  onUsernameChange = (event)=>{
    this.setState({ username:event.target.value });
    //alert(event.target.value);
  }
  onPasswordChange = (event)=>{
    this.setState({password:event.target.value});
  }
  onSubmit = (event) =>{
    event.preventDefault();
    let username=this.state.username;
    let pwd=this.state.password;
    let data=Bank.getAccountDetails();
    console.log(data);
    if(username in data){

      let password=data[username].password
      if(pwd===password){
       
        Bank.setCurrentUser(username);
        swal("login success!");
       // window.location.href="home.html"
       this.props.history.push("/home");
      }
      else{

        swal("incorrect username or password");
      }
     }
     else{

        alert("user doesnot exist")
     }
  }
    render(){

        return(

            <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4"><h1>WELCOME TO  SBI</h1></div>
        </div>

        <div className="row"></div>
        <div className="col-4"></div>
        <div className="col-6">

        <div className="jumbrtron">
          
          <form onSubmit={this.onSubmit}>
         <div className="form-group">
              <label for="acno">Username</label>
              <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" id="acno"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your Accountno with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="pwd">Password</label>
              <input type="password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" id="pwd"/>
            </div>
            
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
           
          </div>
         
        
        </div>

        <div className="col-4"></div>     
      
      </div>
        );
    }
}

export default withRouter(Login);