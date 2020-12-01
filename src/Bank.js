import { useRouteMatch } from "react-router-dom";

let data={  
 
    user1:{username:"user1",acno:1001,password:"username",balance:3000,history:[]},
    user2:{username:"user2",acno:1002,password:"username2",balance:3000,history:[]},
    user3:{username:"user3",acno:1003,password:"username3",balance:3000,history:[]},
    
 
 };
 let newDate = localStorage.getItem("data");
 alert(newDate);
 if(newDate){
    data = JSON.parse(newDate);             //new user can login.
 }

 class Bank{
    static currentUser="";

    static getUser(){
        const currentUser = localStorage.getItem("currentUser");
         return currentUser;
      }

      static saveData(){
         localStorage.setItem("data", JSON.stringify(data)); //to store full data covert object to string
      }
     
     static getAccountDetails(){
       return data;
      }
    static setCurrentUser(username){
      localStorage.setItem("currentUser",username);  //setting currentuser to local storage
   
    }

    static addUser(username,password,acno){
       //let data=this.getAccountDetails();
       data[username] = {username,password,acno,history:[],balance:0};
       Bank.saveData();
    }

    static getUsers(){
       return data;
    }

    static deleteUser(username){
       delete data[username];
    }
    static getHistory(){
       return data[Bank.getUser()].history;
    }
   // static getUser(){
    //   return data[Bank.currentUser];
    //}
 }
 export default Bank;
 
     
