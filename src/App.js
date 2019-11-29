import React from 'react';
import './App.css';

import Home from './pages/Home'
import Subtitle from './components/subtitle'

class App extends React.Component {
  constructor() {
    super();
    this.state = {showSubtitle: false};
  }

  showSubtitle = () => {
    this.setState({showSubtitle: true});
  };
  hideSubtitle = () => {
    this.setState({showSubtitle: false});
  };

  render() {
    return (
      <div className="App" onMouseEnter={this.showSubtitle} onMouseLeave={this.hideSubtitle}>
        App
        <Home />

        <div className="AppSubtitle">
          { this.state.showSubtitle && <Subtitle color={"red"} arquive={"App.js"} type={"-"} css={"./App.css"} description={"Eu sou o App.js minha função é incorporar as pages e components"} />}
        </div>
      </div>
    )
  }
}

export default App;
