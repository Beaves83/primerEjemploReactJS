import React, { Component } from 'react';

class ComponenteBibi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: 'persona'}
  }

  changeName() {
    let n = document.getElementsByClassName('input')[0].value
    this.setState({name: n})
  }

    render(){
      return (
        <div className="App-sayname">
         <input type="name" className="input" placeholder="Tu nombre" onChange={this.changeName.bind(this)}/>
         <p className="input-helper">Bienvenido {this.state.name}!</p>
       </div>
      );
    };
  }

 

  export default ComponenteBibi;