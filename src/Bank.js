let data={  
 
    user1:{username:"user1",acno:1001,password:"username",balance:3000,history:[]},
    user2:{username:"user2",acno:1002,password:"username2",balance:3000,history:[]},
    user3:{username:"user3",acno:1003,password:"username3",balance:3000,history:[]},
    
 
 };

 class Bank{
    static currentUser="";

    static getUser(){
        const currentUser = localStorage.getItem("currentUser");
         return currentUser;
      }
     
    static getAccountDetails(){
       return data;
    }
    static setCurrentUser(username){
      localStorage.setItem("currentUser",username);  //setting currentuser to local storage
   
    }

    static addUser(username,password,acno){
       //let data=this.getAccountDetails();
       data[username] = {username,password,acno,balance:0};
    }
    static getHistory(){
       return data[Bank.getUser()].history;
    }
    //static getUser(){
      //return data[Bank.currentUser];
   //}
 }
 export default Bank;
 
     
