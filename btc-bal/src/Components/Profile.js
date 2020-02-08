import React from "react";
import List from "./List";

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
      <div>
        <h4>Add wallet</h4>
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
