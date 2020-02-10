import React from "react";
import List from "./List";
import "../App.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLine: "",
      searchLine: "",
      bal: 0
    };
  }

  handleChange = val => {
    // console.log(val);
    this.setState({ inputLine: val });
  };

  handleSearchLine = val => {
    // console.log(val);
    this.setState({ searchLine: val });
  };

  render(props) {
    return (
      <div className="Profile">
        <div className="prof-area">
          <section className="prof-1">
            <p className="user-name">
              Welcome back,
              <h4 className="margin">{this.props.user.name}</h4>
            </p>
            <img
              className="img"
              src={`${this.props.user.img}`}
              alt={"profile picture"}
            />
          </section>
          <section className="prof-2">
            <h4 className="wallet-spacing">Add wallet</h4>
            <input onChange={e => this.handleChange(e.target.value)} />
            <button
              onClick={() =>
                this.props.addWallet({
                  coin: this.state.inputLine,
                  bal: this.state.bal
                })
              }
            >
              Add coin
            </button>
            <input
              className="search"
              onChange={e => this.handleSearchLine(e.target.value)}
            />
            <button
              onClick={() => {
                console.log(this.props.searchWallets);
                this.props.searchWallets(this.state.searchLine);
                this.handleSearchLine("");
              }}
            >
              search
            </button>
          </section>
        </div>

        <List
          addWallet={this.props.addWallet}
          balMinus={this.props.balMinus}
          balAdd={this.props.balAdd}
          user={this.props.user}
          wallets={this.props.wallets}
          deleteWallet={this.props.deleteWallet}
        />
      </div>
    );
  }
}

export default Profile;
