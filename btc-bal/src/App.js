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
        wallets: [],
        img: ""
      }
    };
  }

  componentDidMount = () => {
    axios.get(`/api/user`).then(response => {
      // console.log(response.data);
      this.setState({ user: response.data });
    });
  };
  editName = newName => {
    axios.put(`/api/user`).then(response => {
      this.setState({ user: response.data });
    });
  };
  searchWallets = text => {
    // console.log(text);
    // if (text !== "") {
    const { wallets } = this.state.user.wallets;
    axios
      .get(`/api/user/wallet?coin=${text}`)
      .then(response =>
        this.setState({ user: { ...this.state.user, wallets: response.data } })
      )
      .catch(() => console.log("search bar error"));
    // } else this.setState({ user });
  };

  addWallet = newWallet => {
    axios
      .post(`/api/user/wallet`, newWallet)
      .then(response => this.setState({ user: response.data }))
      .catch(() => console.log(`wallet failed to add`));
  };

  balAdd = (id, newBal) => {
    axios
      .put(`/api/user/wallet/add/${id}`, { bal: newBal })
      .then(response => this.setState({ user: response.data }))
      .catch(() => console.log(`Deposit failed`));
  };

  balMinus = (id, newBal) => {
    axios
      .put(`/api/user/wallet/minus/${id}`, { bal: newBal })
      .then(response => this.setState({ user: response.data }))
      .catch(() => console.log(`Withdraw failed`));
  };

  deleteWallet = id => {
    let bool = window.confirm(`Are you sure you want to delete this wallet?`);
    if (bool) {
      axios
        .delete(`/api/user/wallet/${id}`)
        .then(response => this.setState({ user: response.data }));
    }
  };
  // getPrices = {
  //   axios.get(``)
  // }

  render() {
    // this.searchWallets(coin: btc);
    let btc = "$9,859.34";
    let eth = "$223.46";
    let ltc = "$74.40";
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
          searchWallets={this.searchWallets}
        />
        <footer className="footer">
          <p className="head-space">BTC Price: {btc}</p>
          <p className="head-space">LTC Price: {ltc}</p>
          <p className="head-space">ETH: {eth}</p>
        </footer>
      </div>
    );
  }
}

export default App;
