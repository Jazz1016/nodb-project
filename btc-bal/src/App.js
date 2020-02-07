import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    axios.get(`/api/user`).then(response => {
      console.log(response.data);
      this.setState({ user: response.data });
    });
  };

  addWallet = () => {};

  editName = () => {};

  balAdd = () => {};

  balMinus = () => {};

  render() {
    return (
      <div className="App">
        <Header />
        <Profile editName={this.editName} />
      </div>
    );
  }
}

export default App;
