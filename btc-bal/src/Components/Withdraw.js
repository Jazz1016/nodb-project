import React from "react";
import "../App.css";

class Withdraw extends React.Component {
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
  handleChanage = val => {
    this.setState({ inputLine: val });
  };
  render() {
    return (
      <div>
        <h1></h1>
        {this.state.isEditing ? (
          <div>
            <input onChange={e => this.handleChanage(e.target.value)} />
            <button
              className="wallet-spacing"
              onClick={() => {
                // console.log(this.state.inputLine);
                this.props.balMinus(this.props.id, this.state.inputLine);
                this.toggleEdit();
              }}
            >
              Confirm
            </button>
          </div>
        ) : (
          <button className="wallet-spacing" onClick={() => this.toggleEdit()}>
            Withdraw
          </button>
        )}
        {/* {this.state.isEditing ? (
          <div>
            <input onChange={e => this.handleChange(e.target.value)} />
            <button
              onClick={() => {
                this.props.saveName(
                  this.props.pokemon.id,
                  this.state.userInput
                );
                this.toggleEdit();
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <p onDoubleClick={this.toggleEdit}>{this.props.pokemon.name}</p>
        )} */}
      </div>
    );
  }
}

export default Withdraw;
