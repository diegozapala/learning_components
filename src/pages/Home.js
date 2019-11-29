import React from 'react';
import '../assets/styles/pages/Home.css';

import Header from '../components/header'
import Banner from '../components/banner'
import Subtitle from '../components/subtitle'

class Home extends React.Component {
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
      <div className="Home" onMouseEnter={this.showSubtitle} onMouseLeave={this.hideSubtitle}>
        Home
        <Header />
        <Banner />

        <div className="HomeSubtitle">
          { this.state.showSubtitle && <Subtitle color={"green"} arquive={"Home.js"} type={"page"} css={"../assets/styles/pages/Home.css"} description={"Eu sou a Home.js minha função é ser a página intera e incorporar os components"} /> }
        </div>
      </div>
    )
  }
}

export default Home;
