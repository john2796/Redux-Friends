import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getItem,
  addItem,
  deleteItem,
  updateFriend
} from "./store/actions/friendAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      error: null,
      updateId: null,
      isUpdated: false,
      isCancel: false
    };
  }
  componentDidMount() {
    this.props.getItem();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, age, email } = this.state;
    if (!name || !age || !email) {
      this.setState({ error: "form are required" });
      return;
    }
    if (this.state.isUpdated) {
      this.addFriend();
    } else {
      this.submitUpdatedFriend();
    }
    this.setState({
      error: null,
      isUpdated: false,
      age: "",
      name: "",
      email: "",
      isCancel: false
    });
  };
  addFriend = () => {
    const newFriend = {
      id: Math.floor(Math.random() * Date.now()),
      age: this.state.age,
      name: this.state.name,
      email: this.state.email
    };
    this.props.addItem(newFriend);
  };
  submitUpdatedFriend = () => {
    const updatedFriend = {
      id: this.state.updateId,
      age: this.state.age,
      name: this.state.name,
      email: this.state.email
    };
    this.props.updateFriend(this.state.updateId, updatedFriend);
  };
  handleUpdate = f => {
    this.setState({
      age: f.age,
      email: f.email,
      name: f.name,
      updateId: f.id,
      isUpdated: true,
      error: null,
      isCancel: true
    });
    this.nameInput.focus();
  };

  cancelUpdate = e => {
    e.preventDefault();
    this.setState({
      error: null,
      isUpdated: false,
      age: "",
      name: "",
      email: "",
      isCancel: false
    });
  };

  render() {
    const { friends, errors, deleteItem, loading } = this.props;
    const { isUpdated, isCancel } = this.state;
    return (
      <div className="App">
        <h1>Friends List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
            ref={input => {
              this.nameInput = input;
            }}
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="age"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <button type="submit"> {isUpdated ? "UPDATE" : "ADD"} </button>
          <button
            style={isCancel ? { display: "block" } : { display: "none" }}
            onClick={this.cancelUpdate}
          >
            cancel
          </button>
        </form>
        {loading && <h1>loading...</h1>}
        {errors && <h1 style={{ color: "red" }}>{errors}</h1>}
        {this.state.error && (
          <h1 style={{ color: "red" }}>{this.state.error}</h1>
        )}
        <ul>
          {friends.map(f => (
            <li key={f.id}>
              <p>{f.name}</p>
              <p>{f.age}</p>
              <p>{f.email}</p>
              <button onClick={() => deleteItem(f.id)}>delete</button>
              <button onClick={() => this.handleUpdate(f)}>update</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendReducer.friends,
  loading: state.friendReducer.loading,
  errors: state.friendReducer.errors
});

export default connect(
  mapStateToProps,
  { getItem, addItem, deleteItem, updateFriend }
)(App);
