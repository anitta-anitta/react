//import { useRouteMatch } from "react-router-dom";

import axios from 'axios';

const baseUrl="http://localhost:4000";
let data={  
 
 //   user1:{username:"user1",acno:1001,password:"username",balance:3000,history:[]},
//    user2:{username:"user2",acno:1002,password:"username2",balance:3000,history:[]},
  //  user3:{username:"user3",acno:1003,password:"username3",balance:3000,history:[]},
    
 
 };

 let newDate = localStorage.getItem("data");
// alert(newDate);
 if(newDate){
    data = JSON.parse(newDate);             //new user can login.
 }

 class Bank{
    
      static currentUser="";

      static getAccountDetails(){
         return data;
        }

      static saveData(){
         localStorage.setItem("data", JSON.stringify(data)); //to store full data covert object to string
      }
     
     
    static setCurrentUser(username){
      localStorage.setItem("currentUser",username);  //setting currentuser to local storage
   
    }

    static getCurrentUser(){
      return localStorage.getItem("currentUser");
    }

    static addUser(username,password,acno){
       //let data=this.getAccountDetails();
       data[username] = {username,password,acno,history:[],balance:0};
       Bank.saveData();
    }

  //  static getUsers(){
    //   return data;
 //   }

    static deleteUser(username){
       delete data[username];
       Bank.saveData();
    }
    static getHistory(){
       return data[Bank.getCurrentUser()].history;
    }
   static login(username,password){
      return axios.post("http://localhost:4000/users/login",{
         username,
         password
      },{withCredentials:true})
   }

   static registration(username,password,confirmPassword,acno){
      return axios.post(baseUrl+"/users/register",{
         username,
         password,
         confirmPassword,
         acno
      },{withCredentials:true})
   }
   static deposit(username,amount){
      return axios.post(baseUrl+"/users/deposit",{
         username,
         amount
      },{withCredentials:true})
   }
   static withdraw(username,amount){
      return axios.post(baseUrl+"/users/withdraw",{
         username,
         amount
      },{withCredentials:true})
   }
   static history(){
      return axios.get(baseUrl+"/users/transcation-history",{withCredentials:true})
   }
   static getUsers(){
      return axios.get(baseUrl+"/users",{withCredentials:true})
   }
 }
 export default Bank;
 
     
