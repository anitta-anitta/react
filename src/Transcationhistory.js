import React from 'react';
import { withRouter } from 'react-router';
import Bank from './Bank';


class Transcationhistory extends React.Component{
      render(){
          let history = Bank.getHistory();
          return(<div className="container">
                  <h1>Transcation History</h1>

                  <table className="table">
                    <tr>
                        <th>Type of Transcation</th>
                        <th>Amount</th>
                    </tr>
                    {
                        history.map(h=><tr>
                                <td>{h.typeOfTranscation}</td>
                                <td>{h.amount}</td>
                            </tr>)
                    }
                </table>

                  </div>
          )
      }
}


export default withRouter(Transcationhistory);