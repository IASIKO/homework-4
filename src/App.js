import { Component } from "react";
import "./App.css";

const generateUsers = () => [
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  "user6",
  "user7",
  "user8",
  "user9",
  "user10",
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      showUsersList: true,
    };
  }

  componentDidMount() {
    const usersArr = generateUsers();
    this.setState({
      user: usersArr,
    });
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.user !== this.state.user) {
      document.title = `${this.state.user.length} users left`;
    }
  }

  clickHandler = () => {
    const randomList =
      this.state.user[Math.floor(Math.random() * this.state.user.length)];

    const randomUser = this.state.user.filter((element) => {
      return element !== randomList;
    });
    this.setState({
      user: randomUser,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Click</button>
        <button
          onClick={() => {
            this.setState({ showUsersList: !this.state.showUsersList });
          }}
        >
          {this.state.showUsersList ? "hide" : "show"}
        </button>
        {this.state.showUsersList && (
          <RenderUsers usersList={this.state.user} />
        )}
      </div>
    );
  }
}

class RenderUsers extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.title = `${this.props.usersList.length} users`;
  }

  componentWillUnmount() {
    document.title = "pusta";
  }

  render() {
    return (
      <div>
        {" "}
        {this.props.usersList.map((item, index) => {
          return <h1 key={index}>{item}</h1>;
        })}
      </div>
    );
  }
}
