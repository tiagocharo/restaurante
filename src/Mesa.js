import React, { Component } from 'react';
import './App.css';

class Mesa extends Component {
    constructor() {
        super();
        this.state = {
            total: 0
        }
    }

    componentWillMount() {
        let { refrigerante, hamburger, sorvete } = this.props.history.location.state.mesa;

        this.setState({
            total: refrigerante + hamburger + sorvete
        })
    }

    back() {
        this.props.history.goBack();
    }

    pay(total, item, e) {
        if (total <= 0 ||  e.target.disable === true) {
            return;
        }
        e.target.disable = true;
        e.target.textContent = "Pago";
        e.target.parentElement.style.backgroundColor = "red";
        e.target.style.color = "white";

        this.setState({
            total: total - item
        })
    }

  render() {
      let {
          refrigerante,
          hamburger,
          sorvete,
          mesa
      } = this.props.history.location.state.mesa;

    return (
      <div className="app">
        <div className="header">
            <div className="voltar" onClick={() => this.back()}>
                Voltar
            </div>
            <div className="title">{`Mesa ${mesa}`}</div>
        </div>
        <div className="bloco-mesa top">    
            <div>
                <p>
                    {`Refrigerante: ${refrigerante}`}
                </p>
            </div>
            <div ref={pagar => this.pagar = pagar} className="pagar">
                <button onClick={(e) => this.pay(this.state.total, refrigerante, e)}>Pagar</button>
            </div>

        </div>

        <div className="bloco-mesa">
            <div>
                <p>
                    {`Hamburger: ${hamburger}`}
                </p>
            </div>
            <div className="pagar">
                <button onClick={(e) => this.pay(this.state.total, hamburger, e)}>Pagar</button>
            </div>
        </div>

        <div className="bloco-mesa">
            <div>
                <p>
                    {`Sorvete: ${sorvete}`}
                </p>
            </div>
            <div className="pagar">
                <button onClick={(e) => this.pay(this.state.total, sorvete, e)}>Pagar</button>
            </div>
        </div>

        <div className="bloco-mesa">
            <p>
                <b>{`TOTAL: ${this.state.total}`}</b>
            </p>
        </div>
      </div>
    );
  }
}

export default Mesa;
