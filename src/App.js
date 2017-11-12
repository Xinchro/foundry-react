import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Item } from './components/index.js'

class App extends Component {
  render() {
    return (
      <section className="App">
        <Item name="oh" />
      </section>
    );
  }
}

export default App
