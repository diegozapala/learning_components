import React from 'react';
import '../../assets/styles/components/subtitle/index.css';

class index extends React.Component {
  render() {
    return (
      <div className="Subtitle">
        <div className="Content">

          <div className="Line">
            <div className="Title">Cor: </div> <div className={"Response "+this.props.color}></div>
          </div>

          <div className="Line">
            <div className="Title">Arquivo: </div> <div className="Response">{this.props.arquive}</div>
          </div>

          <div className="Line">
            <div className="Title">Tipo: </div> <div className="Response">{this.props.type}</div>
          </div>

          <div className="Line">
            <div className="Title">CSS: </div> <div className="Response">{this.props.css}</div>
          </div>

          <div className="Line LastLine">
            <div className="Title">Descrição: </div> <div className="Response">{this.props.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default index;
