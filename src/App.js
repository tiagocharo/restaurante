import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      mesa1: {
        itens: {
          refrigerante: 5,
          hamburger: 25,
          sorvete: 12,
          mesa: 1
        }
      },
      mesa2: {
        itens: {
          refrigerante: 10,
          hamburger: 28,
          sorvete: 15,
          mesa: 2
        }
      },
      mesa3: {
        itens: {
          refrigerante: 15,
          hamburger: 27,
          sorvete: 17,
          mesa: 3
        }
      },
      mesa4: {
        itens: {
          refrigerante: 30,
          hamburger: 15,
          sorvete: 17,
          mesa: 4
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
          <div className="header title">Restaurante Rocha</div>
          <div className="bloco top">
            <Link 
              to={{
                pathname: "/mesa",
                state: {
                  mesa: this.state.mesa1.itens,

                }
              }}>
              Mesa 1
            </Link>
          </div>

          <div className="bloco">
          <Link 
              to={{
                pathname: "/mesa",
                state: {
                  mesa: this.state.mesa2.itens
                }
              }}>
              Mesa 2
            </Link>
          </div>

          <div className="bloco">
          <Link 
              to={{
                pathname: "/mesa",
                state: {
                  mesa: this.state.mesa3.itens
                }
              }}>
              Mesa 3
            </Link>
          </div>

          <div className="bloco">
          <Link 
              to={{
                pathname: "/mesa",
                state: {
                  mesa: this.state.mesa4.itens
                }
              }}>
              Mesa 4
            </Link>
          </div>
      </div>
    );
  }
}

export default App;
