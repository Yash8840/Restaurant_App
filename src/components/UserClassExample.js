import React from "react";

class UserClassExample extends React.Component{
  constructor(props){
    super(props);
    // console.log(props);

    this.state = {
      count1:1,
      count2:2,
    }
    console.log(`${this.props.name} - Child - UserClass Constructor`);
    
    
  }
  componentDidMount(){
    //Best place to make API call
    console.log(`${this.props.name} - Child - UserClass Component Did Mount`);
  }

  render(){
    console.log(`${this.props.name} - Child - UserClass Render`);
    
    const {name, location, contact} = this.props;
    const {count1, count2} = this.state;
    return(
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact}</h2>
        <h2>Count1 : {count1}, Count2 : {count2}</h2>
        <button onClick={()=>{
          this.setState({
            count1 : this.state.count1+1,
          })
        }}>Change count1</button>
      </div>
    );
  }
}
export default UserClassExample;