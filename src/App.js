import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//jsonplaceholder.typicode.com/users

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }, 
      () => {
        console.log(this.state);
      }
      ))
  }

  render() {
    return (
      <div className='App'>
          {
            this.state.monsters.map((monster) => {
              return <h1 key={monster.id}>{monster.name}</h1>;
            })
          }
      </div>

  );
}
}

export default App;