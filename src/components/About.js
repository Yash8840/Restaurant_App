import User from "./User";
// import UserClassExample from "./UserClassExample";
import React, { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component
{
  constructor(props){
    super(props);
    console.log("Parent - About Constructor");
  }
  componentDidMount(){
    console.log("Parent - About Component Did Mount");
  }
  render(){
    console.log("Parent - About Render");
    
  return(
    <div>
      <h1>About Us</h1>
      <h2>This is Namaste React Aboutghfhggch Us Page</h2>
      {/* <User name={"yash Shekhar"}/> */}
      {/* <UserClassExample name={"child- 1"} location={"Bangalore"} contact={"9999999999"}/>
      <UserClassExample name={"child - 2"} location={"Kolkata"} contact={"8888888888"}/> */}


      <UserClass userName={"Yash8840"} location={"Delhi"} contact={"7777777777"}/>

      {/* <User/> */}
      
      

    </div>
  );
}
}
export default About;