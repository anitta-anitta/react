import React from 'react';
import { withRouter } from 'react-router';
import Bank from './Bank';


class Transcationhistory extends React.Component{

    state= {
        history:[]
    }
      render(){
         // let history = Bank.getHistory();
          return(<div className="container">
                  <h1>Transcation History</h1>

                  <table className="table">
                    <tr>
                        <th>Type of Transcation</th>
                        <th>Amount</th>
                    </tr>

                    {
                        this.state.history.length==0?
                        <tr><td>No data</td></tr>:null
                    }
                    {
                        this.state.history.map(h=><tr>
                                <td>{h.typeOfTranscation}</td>
                                <td>{h.amount}</td>
                            </tr>)
                    }
                </table>

                  </div>
          )
      }
      componentDidMount(){
          Bank.history()
            .then(response=>{
               this.setState({history:response.data.history})
            })
      }
}


export default withRouter(Transcationhistory);