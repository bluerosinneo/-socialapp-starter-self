import React from "react";
import Menu from "../components/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"


class Profile extends React.Component {
<<<<<<< HEAD

  constructor(props) {
    super(props);
    this.client = new BlueService();
    this.state = {
      data: {},


    }
  }

  getProfile() {
    return this.client.getUserName().then(result => {
      //console.log(result)
      // console.log(result.data)
      // console.log(result.data.user)
       console.log(result.data.user.username)
       console.log(result.data.user.displayName)
       console.log(result.data.user.about)
      

      this.setState({
         data: result.data.user
        })

    })
  }


  componentDidMount() {
    this.getProfile();
  }

=======
  constructor(props) {
    super(props);
    // this.client = new Profile()
    // this.state = {


    // }

}
>>>>>>> 49ff7c30b0ee0564c8b3b6be8429bbff18c1260d
  render() {
    console.log(JSON.parse(localStorage.getItem("login")));
    // console.log(tempJason)
    // console.log(tempJason.result)
    // console.log(tempJason['result'])

    return (
      
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
<<<<<<< HEAD
          <div>username:{this.state.data.username}</div>
          <div>displayName:{this.state.data.displayName}</div>
          <div>about:{this.state.data.about}</div>
        </div>
        <h2>Profile</h2>
=======
          <div>username:ss{}</div>
          <div>displayName:{}</div>
          <div>about:{}</div>
        </div>
>>>>>>> 49ff7c30b0ee0564c8b3b6be8429bbff18c1260d
      </>
    );
  }



}

export default userIsAuthenticated(Profile);
