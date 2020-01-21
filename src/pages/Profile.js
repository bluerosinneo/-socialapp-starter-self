import React from "react";
import Menu from "../components/Menu";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.client = new Profile()
    // this.state = {


    // }

}
  render() {
    console.log(JSON.parse(localStorage.getItem("login")));
    // console.log(tempJason)
    // console.log(tempJason.result)
    // console.log(tempJason['result'])

    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <div>username:ss{}</div>
          <div>displayName:{}</div>
          <div>about:{}</div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
