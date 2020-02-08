import React from "react";

class Deposit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isEditing: false
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
          <button onClick={() => this.toggleEdit()}>Deposit</button>
        )}
      </div>
    );
  }
}

export default Deposit;
