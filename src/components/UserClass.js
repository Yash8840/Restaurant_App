import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    
    console.log(`child Constructor`);

    this.state = {
      userInfo:{
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
      }
    }
    
    
  }
  async componentDidMount(){
    //Best place to make API call
    console.log(`child Did Mount`);
    const data = await fetch("https://api.github.com/users/"+this.props.userName);
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
  }
  componentDidUpdate(){
    console.log("Child Did Update");
  }
  componentWillUnmount(){
    console.log("child Will Unmount");
  }

  render(){
    console.log(`child Render`);
    
    const {name, location,contact, avatar_url} = this.state.userInfo;
    return(
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        
      </div>
    );
  }
}
export default UserClass;