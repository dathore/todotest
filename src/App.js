
import { Component } from "react";
import Routes from "./routes/Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;