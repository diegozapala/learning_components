import React from 'react';
import '../../assets/styles/components/header/index.css';

import Logo from './Logo'
import Navigator from './Navigator'
import Subtitle from '../subtitle'

class index extends React.Component {
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
      <header className="Header" onMouseEnter={this.showSubtitle} onMouseLeave={this.hideSubtitle}>
        Header

        <Logo/>
        <Navigator/>

        <div className="HeaderSubtitle">
          { this.state.showSubtitle && <Subtitle color={"blue"} arquive={"Header.js"} type={"component"} css={"../../assets/styles/components/header/index.css"} description={"Eu sou o Header.js minha função é ser um component dentro da Home"} /> }
        </div>
      </header>
    )
  }
}

export default index;
