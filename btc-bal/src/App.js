import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 0,
        wallets: []
      }
    };
  }

  componentDidMount = () => {
    axios.get(`/api/user`).then(response => {
      console.log(response.data);
      this.setState({ user: response.data });
    });
  };
  editName = newName => {
    axios.put(`/api/user`).then(response => {
      this.setState({ user: response.data });
    });
  };

  addWallet = newWallet => {
    axios
      .post(`/api/user/wallet`, newWallet)
      .then(response => this.setState({ user: response.data }));
  };

  balAdd = (id, newBal) => {
    axios
      .put(`/api/user/wallet/add/${id}`, { bal: newBal })
      .then(response => this.setState({ user: response.data }));
  };

  balMinus = (id, newBal) => {
    axios
      .put(`/api/user/wallet/minus/${id}`, { bal: newBal })
      .then(response => this.setState({ user: response.data }));
  };

  deleteWallet = id => {
    axios
      .delete(`/api/user/wallet/${id}`)
      .then(response => this.setState({ user: response.data }));
  };

  render() {
    return (
      <div className="App">
        <Header name={this.state.user.name} />
        <Profile
          editName={this.editName}
          addWallet={this.addWallet}
          balAdd={this.balAdd}
          balMinus={this.balMinus}
          deleteWallet={this.deleteWallet}
          user={this.state.user}
          wallets={this.state.user.wallets}
        />
      </div>
    );
  }
}

export default App;
