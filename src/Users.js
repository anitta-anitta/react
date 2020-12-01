import React from 'react';
import { withRouter } from 'react-router';
import Bank from './Bank';


class Users extends React.Component{
    deleteUser(username){
        Bank.deleteUser(username);
        this.setState({}); // to re-render
    }
      render(){
          let users = Bank.getUsers();
          return(<div className="container">
                  <h1>Users</h1>

                  <table className="table">
                    <tr>
                        <th>Username</th>
                        <th>Balance</th>
                    </tr>
                    {
                       Object.keys(users).map(key=><tr>   

                                <td>{users[key].username}</td>
                                <td>{users[key].balance}</td>
                                <td onClick={()=>{this.deleteUser(key)}}>Delete</td>
                            </tr>)
                    }
                </table>

                  </div>
          )
      }
}


export default withRouter(Users);