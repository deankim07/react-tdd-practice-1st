import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    state = {
        on: false,
        input: '',
        mainColor: 'blue',
        lifecycle: ''
    };

    componentDidMount() {
        this.setState({ lifecycle: 'componentDidMount' })
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <h3 className={this.state.mainColor}>Everyone is Welcome~!</h3>
            </header>
            <p className="App-intro">Hello World</p>
            <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
            <button onClick={() => this.setState({on: true})}>Click</button>
            <h2>{this.state.input}</h2>
            <input onChange={(e) => this.setState({input: e.currentTarget.value})} type="text" />
            <p className="lifeCycle">{this.state.lifecycle}</p>
        </div>
        );
    }
}

export class Link extends Component {
    render() {
        return this.props.hide ? null : <a href={this.props.address}>Click</a>
    }
}


export default App;
