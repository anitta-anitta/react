import React from 'react';
import Bank from './Bank';
import swal from 'sweetalert';
import { Link }  from 'react-router-dom';
import { Formik, Form, Field} from 'formik';
import * as  Yup from 'yup';

const withdrawalSchema = Yup.object().shape({
    wdUsername:  Yup.string()
    .min(2, 'Too long')
    .max(10, 'Too short')
    .required('Required')
})
 const depositSchema = Yup.object().shape({
    wdAmount:  Yup.string()
    .min(2, 'Too long')
    .max(10,'Too short')
    .required('Required'),
})

class Home extends React.Component{
    state={
       
        balance:""
    }

    onDeposite = (values)=>{
        let username=values.dpUsername;
        let amt=Number(values.dpAmount);

     Bank.deposit(username,amt)
        .then(response=>{
            this.setState({balance:response.data.balance});
            swal("Deposit sucessfully!");
        })
        .catch(err=>{
             swal("failed","u provide invalid data","error");
        });

        //let btag=document.querySelector("#bal");
      //  let data=Bank.getAccountDetails();
     ///if(username in data){
          //      data[username]["balance"]+=amt
            //    let bal=data[username]["balance"]
                 //btag.textContent="avaliable balance:"+bal
              //   data[username]["history"].push({
                //     typeOfTranscation:"Credit",
                  //   amount:amt
              //   })
                // Bank.saveData(); // to save history
             //   this.setState({balance:bal});
               //  swal("Deposit Successfully")
        //   }
    // else{
      //     swal("Invalid user")
     //}
     

    }
    onWithdraw = (values)=>{
        
         let username=values.wdUsername
         let amt=Number(values.wdAmount);

         Bank.withdraw(username,amt)
         .then(response=>{
            this.setState({balance:response.data.balance});
             swal("Withdraw sucessfully!",response.data.message,"sucess");
         })
         .catch(err=>{
              swal("failed","u provide invalid data","error");
         });
 
         // let btag=document.querySelector("#bal");
        // let data=Bank.getAccountDetails();
   // if(username in data){
       //      let avlbal=data[username]["balance"]
       //      if(amt>avlbal){
        //     swal("insufficient balance")
       //    }
   //  else{
        //      data[username]["balance"]-=amt
        //       let bal=data[username]["balance"]
               // btag.textContent="available balance:"+bal
          //     this.setState({balance:bal});
          //     data[username]["history"].push({
          //      typeOfTranscation:"Debit",
           //     amount:amt
        //    });
        //    Bank.saveData();
                
         //       swal("Withdraw suceesfully")
         //    }
   //  }
   //  else{
   //     swal("Invalid user")
   //  }
   
    }
    dpUsernameChange = (event)=>{
        this.setState({
       dpUsername: event.target.value
    })
    }
    dpAmountChange = (event)=>{
        this.setState({
        dpAmount: event.target.value
    })
    }
    
    wdUsernameChange =(event)=>{
      this.setState({
        wdUsername: event.target.value
    })
    }
    wdAmountChange = (event)=>{
        this.setState({
         wdAmount: event.target.value
    })
    }

    
    render(){
        return( <div className="container">
           Balance:{this.state.balance}
             <Link to="/history">History</Link>
                  <div className="row">
                    <div className="col-6">
                     <div className="jumbotron">

              <Formik  
                      initialValues={{
                             dpUsername: "",
                             dpAmount:""
                
                       }}
                      validationSchema={withdrawalSchema}
                       onSubmit={this.onSubmit}  >
          
                 {({errors, touched}) => ( 
                  
                        <Form> 
                            <h4>Deposit</h4>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <Field name="dpUsername" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Amount</label>
                                <Field name="dpAmount"  className="form-control"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Deposit</button>
                       </Form>
                      )}    
             </Formik>
             </div>
             </div>
                   
                    <div className="col-6">
                    <div className="jumbotron">

                 <Formik  
                            initialValues={{
                             wdUsername: "",
                             wdAmount:""
                
                       }}
                      validationSchema={depositSchema}
                         onSubmit={this.onSubmit}  >
                   {({errors, touched}) => ( 
                            <Form>
                            <h4>Withdraw</h4>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label> 
                                <Field name="wdUsername"  className="form-control"/>          
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Amount</label>
                                <Field name="wdAmount"  className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Withdraw</button>
                            </Form>
                            )}    
             </Formik>
                        </div>
                    </div>
                </div>
            </div>
       
        )
    }
}
export default Home;