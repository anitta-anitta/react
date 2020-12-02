import React from 'react';
import Bank from './Bank';
import swal from 'sweetalert';
import { Link }  from 'react-router-dom';

class Home extends React.Component{
    state={
        dpUsername:"",
        dpAmount:"",
        wdUsername:"",
        wdAmount:"",
        balance:""
    }

    onDeposite = (event)=>{
        event.preventDefault();
        let username=this.state.dpUsername;
        let amt=Number(this.state.dpAmount);

     Bank.deposit(username,amt)
        .then(response=>{
            swal("Deposit sucessfully!");
        })
           .catch(err=>{
             swal("failed","u provide invalid data","error");
        });

        //let btag=document.querySelector("#bal");
      //  let data=Bank.getAccountDetails();
     i///if(username in data){
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
    onWithdraw = (event)=>{
         event.preventDefault();
         let username=this.state.wdUsername
         let amt=Number(this.state.wdAmount);
         // let btag=document.querySelector("#bal");
         let data=Bank.getAccountDetails();
     if(username in data){
             let avlbal=data[username]["balance"]
             if(amt>avlbal){
             swal("insufficient balance")
           }
     else{
              data[username]["balance"]-=amt
               let bal=data[username]["balance"]
               // btag.textContent="available balance:"+bal
               this.setState({balance:bal});
               data[username]["history"].push({
                typeOfTranscation:"Debit",
                amount:amt
            });
            Bank.saveData();
                
                swal("Withdraw suceesfully")
             }
     }
     else{
        swal("Invalid user")
     }
   
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
                            <form onSubmit={this.onDeposite}>
                            <h4>Deposit</h4>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" value={this.state.dpUsername} onChange={this.dpUsernameChange} className="form-control" id="uname" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Amount</label>
                                <input type="text" value={this.state.dpAmount} onChange={this.dpAmountChange} className="form-control" id="amt"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Deposit</button>
                       </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="jumbotron">
                            <form onSubmit={this.onWithdraw}>
                            <h4>Withdraw</h4>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" value={this.state.wdUsername} onChange={this.wdUsernameChange} className="form-control" id="uname" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Amount</label>
                                <input type="text" value={this.state.wdAmount} onChange={this.wdAmountChange} className="form-control" id="amt"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Withdraw</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
        )
    }
}
export default Home;