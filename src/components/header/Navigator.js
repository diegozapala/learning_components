import React from 'react';
import '../../assets/styles/components/header/Navigator.css';

import Subtitle from '../subtitle'

class Navigator extends React.Component {
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
      <div className="Navigator" onMouseEnter={this.showSubtitle} onMouseLeave={this.hideSubtitle}>
        Navigator

        <div className="NavigatorSubtitle">
          { this.state.showSubtitle && <Subtitle color={"baby_blue"} arquive={"Navigator.js"} type={"component"} css={"../../assets/styles/components/header/Navigator.css"} description={"Eu sou o Navigator.js minha função é ser um component dentro do Header"} /> }
        </div>
      </div>
    )
  }
}

export default Navigator;
