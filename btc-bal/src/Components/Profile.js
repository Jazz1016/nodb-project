import React from "react";
import List from "./List";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <div>
        Profile.js
        <List />
      </div>
    );
  }
}

export default Profile;
