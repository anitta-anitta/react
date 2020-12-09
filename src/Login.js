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

class Login extends React.Component{
  state={
    username:"",
    password:" "
  }
  


  onSubmit = (values) =>{
    console.log(values);
    let username=values.username;
    let pwd=values.password;

    Bank.login(username,pwd)
    .then(response=>{
     swal("login sucess!",response.data.message, "sucess");
     this.props.history.push("/home");
    })
    .catch(error=>{
      swal("Login failed","incorrect username or password","login failed");
    })
 
    
    }
      // let data=Bank.getAccountDetails();
    //console.log(data);
    //if(username in data){

      //let password=data[username].password
      //if(pwd===password){
       
        //Bank.setCurrentUser(username);
        //swal("login success!");
       // window.location.href="home.html"
       //this.props.history.push("/home");
      //}
      //else{

        //swal("incorrect username or password");
      //}
     //}
     //else{

       // alert("user doesnot exist")
     //}
  //}
    render(){

        return(

            <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6"><h1>WELCOME TO  SBI</h1></div>
        </div>

        <div className="row"></div>
        <div className="col-4"></div>
        <div className="col-8">

        <div className="jumbrtron">
          
          <Formik
               initialValues={{
                 username: "",
                 password:""
               }}
               validationSchema={loginValidations}
              onSubmit={this.onSubmit}      
          >
          {({errors, touched}) => ( 
           <Form>
            <div className="form-group" class="form-label">
            <label for="exampleInputEmail1">Username</label>
            <Field name="username"/>
            {errors.username?<div>{errors.username}</div>:null}
            </div>
             <div className="form-group" class="form-label">
             <label for="exampleInputEmail1">Password</label>
             <Field name="password" type="password"/>
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
    

export default withRouter(Login);