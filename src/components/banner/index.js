import React from 'react';
import '../../assets/styles/components/banner/index.css';

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
      <section className="Banner" onMouseEnter={this.showSubtitle} onMouseLeave={this.hideSubtitle}>
        Banner

        <div className="BannerSubtitle">
          { this.state.showSubtitle && <Subtitle color={"pink"} arquive={"Banner.js"} type={"component"} css={"../../assets/styles/components/banner/index.css"} description={"Eu sou o Banner.js minha função é ser um component dentro da Home"} /> }
        </div>
      </section>
    )
  }
}

export default index;
