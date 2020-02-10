import React from "react";
import "../App.css";

class Deposit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      inputLine: ""
    };
  }
  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleChange = val => {
    this.setState({ inputLine: val });
  };

  render() {
    return (
      <div>
        <h1></h1>
        {this.state.isEditing ? (
          <div>
            <input
              type="number"
              onChange={e => this.handleChange(e.target.value)}
            />
            <button
              className="wallet-spacing"
              onClick={() => {
                console.log(this.props.id);
                this.props.balAdd(this.props.id, this.state.inputLine);
                this.toggleEdit();
              }}
            >
              Confirm
            </button>
          </div>
        ) : (
          <button className="wallet-spacing" onClick={() => this.toggleEdit()}>
            Deposit
          </button>
        )}
      </div>
    );
  }
}

export default Deposit;
