import React from 'react';
import { withRouter } from 'react-router';
import swal from 'sweetalert';
import Bank from './Bank';


class Users extends React.Component{
    state = {
        users:[]
    }
    deleteUser(username){
        Bank.deleteUser(username);
        swal("Sucess!","User deleted sucessfully");
        this.setState({}); // to re-render
    }

    componentDidMount(){
        Bank.getUsers()
         .then(response=>{
            this.setState({
                users:response.data.users
            }); 
         })
    }
      render(){
          return(<div className="container">
                  <h1>Users</h1>

                  <table className="table">
                    <tr>
                        <th>Username</th>
                        <th>Balance</th>
                    </tr>
                    {
                       this.state.users.map(user=><tr>   

                                <td>{user.username}</td>
                                <td>{user.balance}</td>
                                <td onClick={()=>{this.deleteUser(user)}}>Delete</td>
                            </tr>)
                    }
                </table>

                  </div>
          )
      }
}


export default withRouter(Users);