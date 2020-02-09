import React from "react";
import List from "./List";
import "../App.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLine: "",
      bal: 0
    };
  }

  handleChange = val => {
    console.log(val);
    this.setState({ inputLine: val });
  };

  render(props) {
    return (
      <div className="Profile">
        <div className="prof-area">
          <section className="prof-1">
            <p className="user-name">
              <h4>{this.props.user.name}</h4>
              age: {this.props.user.age}
            </p>
            <img
              className="img"
              src={`${this.props.user.img}`}
              alt={"guy sitting in gold"}
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
