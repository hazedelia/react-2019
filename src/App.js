import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList";
import Header from "./components/header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
        </div>
        { /* <PostModal /> */}
      </div>
    );
  }
}

export default App;