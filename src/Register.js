
import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import { withRouter } from 'react-router';
import { Formik, Form, Field} from 'formik';
import * as  Yup from 'yup';

const loginValidations = Yup.object().shape({
  username:  Yup.string()
  .min(2, 'Too long')
  .max(10, 'Too short')
  .required('Required'),
  password:  Yup.string()
  .min(2, 'Too long')
  .max(10,'Too short')
  .required('Required')

})


class Register extends React.Component{

    state={
        acno:"",
        username:"",
        password:"",
        confirmPassword:""

    }

    onUsernameChange = (event)=>{
        this.setState({ 
            username:event.target.value
         });
        //alert(event.target.value);
      }
      onPasswordChange = (event)=>{
        this.setState({
            password:event.target.value
        });
      }
      onConfirmPasswordChange = (event)=>{
        this.setState({ 
            confirmPassword:event.target.value
         });
        
      }
      onAcnoChange = (event)=>{
        this.setState({
            acno:event.target.value
        });
      }

      onSubmit = (event) =>{
        event.preventDefault();
        let username=this.state.username;
        let password=this.state.password;
        let confirmPassword=this.state.confirmPassword;
        let acno=this.state.acno;
        
      Bank.registration(username,password,confirmPassword,acno)
      .then(response=>{
        swal("Registration sucess!",response.data.message, "sucess");
        this.props.history.push("/login");
       })
       .catch(err=>{
         swal("registration failed",err.response.data.message,"error");
       });
    

       // let data=Bank.getAccountDetails();
        //if(username in data){
          // swal("Registration Failed","user already exist,plz login");
        //}else if(password!==confirmPassword){
          //   swal("Registration failed","password and confirm password dosen't match");
        //}else{
             //Bank.addUser(username,password,acno);
             //swal("Registrarion Success","your registration has successfully completed");
             //this.props.history.push("/");
           //  event.preventDefault();
         //}
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
              <label for="exampleInputEmail1">Username</label>
              <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" id="uname"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your Username with anyone else.</small>
         </div>
        <div className="form-group">
              <label for="exampleInputEmail1">Acno</label>
              <input type="text" value={this.state.acno} onChange={this.onAcnoChange} className="form-control" id="acno"/>
         
        </div>

        <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" id="pwd"/>
        </div>

         <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input type="password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} className="form-control" id="pwd"/>
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
export default withRouter(Register);