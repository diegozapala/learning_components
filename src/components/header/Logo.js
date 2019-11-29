import React from 'react';
import '../../assets/styles/components/header/Logo.css';

import Subtitle from '../subtitle'

class Logo extends React.Component {
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
      <div className="Logo" onMouseEnter={this.showSubtitle} onMouseLeave={this.hideSubtitle}>
        Logo

        <div className="LogoSubtitle">
          { this.state.showSubtitle && <Subtitle color={"yellow"} arquive={"Logo.js"} type={"component"} css={"../../assets/styles/components/header/Logo.css"} description={"Eu sou o Logo.js minha função é ser um component dentro do Header"} /> }
        </div>
      </div>
    )
  }
}

export default Logo;
