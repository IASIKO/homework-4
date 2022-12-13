import { Component } from "react";
import "./App.css";

// დავალება 1

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

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: [],
//       showUsersList: true,
//     };
//   }

//   componentDidMount() {
//     const usersArr = generateUsers();
//     this.setState({
//       user: usersArr,
//     });
//   }

//   componentDidUpdate(prevprops, prevstate) {
//     if (prevstate.user !== this.state.user) {
//       document.title = `${this.state.user.length} users left`;
//     }
//   }

//   clickHandler = () => {
//     const randomList =
//       this.state.user[Math.floor(Math.random() * this.state.user.length)];

//     const randomUser = this.state.user.filter((element) => {
//       return element !== randomList;
//     });
//     this.setState({
//       user: randomUser,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.clickHandler}> Click</button>
//         <button
//           onClick={() => {
//             this.setState({ showUsersList: !this.state.showUsersList });
//           }}
//         >
//           {this.state.showUsersList ? "hide" : "show"}
//         </button>
//         {this.state.showUsersList && (
//           <RenderUsers usersList={this.state.user} />
//         )}
//       </div>
//     );
//   }
// }

// class RenderUsers extends Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     document.title = `${this.props.usersList.length} users`;
//   }

//   componentWillUnmount() {
//     document.title = "pusta";
//   }

//   render() {
//     return (
//       <div>
//         {" "}
//         {this.props.usersList.map((item, index) => {
//           return <h1 key={index}>{item}</h1>;
//         })}
//       </div>
//     );
//   }
// }

// დავალება 2

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  onAddUser = () => {
    const newUser = {
      name: "gurama",
      age: Math.floor(Math.random() * (60 - 10 + 1) + 10),
      id: new Date().toString(),
    };
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
    }));
  };

  onDeleteUser = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id),
    }));
  };

  onUpdateUser = (id) => {
    this.setState((prevState) => {
      const newUsersList = prevState.users.reduce((acc, current) => {
        if (current.id === id) {
          current.age = 50;
          current.name = "alika";
        }
        return [...acc, current];
      }, []);
      return {
        users: newUsersList,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onAddUser}>add user</button>
        {this.state.users.map((user) => {
          return (
            <div
              key={user.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
              <button onClick={() => this.onUpdateUser(user.id)}>update</button>
              <button onClick={() => this.onDeleteUser(user.id)}>delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
