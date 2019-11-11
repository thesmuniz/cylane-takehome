import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import Nav from "./Nav";
import Overview from "./Overview";
import Repositories from "./Repositories";

class App extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const res = await axios.get(`https://api.github.com/users/octocat/repos`);
    const { data } = await res;
    this.setState({ data });
  }

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="component-container">
          <Switch>
            <Route exact path="/">
              {this.state.data ? <Overview repo={this.state.data} /> : ""}
            </Route>
            <Route path="/repositories">
              {this.state.data ? <Repositories repo={this.state.data} /> : ""}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
