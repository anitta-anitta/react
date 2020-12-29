
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
  Password:  Yup.string()
  .min(2, 'Too long')
  .max(10,'Too short')
  .required('Required'),
  confirmPassword:  Yup.string()
  .min(2, 'Too long')
  .max(10,'Too short')
  .required('Required'),
})


class Register extends React.Component{

    state={
        acno:"",
        username:"",
        password:"",
        confirmPassword:""

    }

   // onUsernameChange = (event)=>{
     //   this.setState({ 
       //     username:event.target.value
         //});
        //alert(event.target.value);
     // }
     // onPasswordChange = (event)=>{
       // this.setState({
         //   password:event.target.value
      //  });
     // }
      //onConfirmPasswordChange = (event)=>{
        //this.setState({ 
          //  confirmPassword:event.target.value
       //  });
        
      //}
      //onAcnoChange = (event)=>{
        //this.setState({
          //  acno:event.target.value
       // });
      //}

      onSubmit = (values) =>{
       
        let username=values.username;
        let password=values.Password;
        let confirmPassword=values.confirmPassword;
        let acno=values.acno;
        console.log(values);
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
          
        <Formik   initialValues={{
                 username: "",
                 password:"",
                 confirmPassword:"",
                 acno:""
               }}
               validationSchema={loginValidations}
              onSubmit={this.onSubmit}  >
          
        {({errors, touched}) => ( 
            <Form>
         <div className="form-group">
              <label for="exampleInputEmail1">Username</label>
              <Field name="username"/>
              {errors.username?<div>{errors.username}</div>:null}
             
         </div>
        <div className="form-group">
              <label for="exampleInputEmail1">Acno</label>
              <Field name="acno"/>
              {errors.acno?<div>{errors.acno}</div>:null}
         
        </div>

        <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <Field name="Password" type="password" />
              {errors.password?<div>{errors.password}</div>:null}
         
        </div>

         <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <Field name="confirmPassword" type="password"/>
              {errors.confirmPassword?<div>{errors.confirmPassword}</div>:null}
         
          </div>    
            
         <button type="submit" className="btn btn-primary" >Submit</button>
           </Form>

            )}    
            </Formik>

          </div>
         
        
        </div>

        <div className="col-4"></div>     
      
      </div>
        );
    }
    }
export default withRouter(Register);