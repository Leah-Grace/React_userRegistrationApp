import React, { Component } from 'react';

class App extends Component {
//the State --- temporary storage for whatever is on your page. tracked
statue = {
  userName: "",
  userMessage: "",
  userInfo:""
}


  //create class method to handle  getting user info
  getUserRegistration = () => {
    console.log(this.state);
  }
//crate method to get user input
getUserInfo = () => {


///how to use e.target.value value to find users?!?!?!



}
getUserMessage = () => {
  console.log(this.state)
}

  render(){
  return (
    <div className="App">
<h2>My Express App</h2>
<input onChange = {e => console.log(e.target.value)} placeholder="user name" type="text"></input><button onClick={this.getUserInfo}>Get user Info</button>

<h5>User Registration</h5>
<input
 onChange = {e => this.setState({
   userName: e.target.value
   })} 
   placeholder="user name" type="text" />
<input onChange = {e => this.setState({
  userMessage: e.target.value
})
}
placeholder="user massage" type="text" />
<button onClick={this.getUserRegistration}>Submit</button>
    </div>
  );
}
}
export default App;
