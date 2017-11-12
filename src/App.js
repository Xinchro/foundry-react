import React, { Component } from 'react'
import logo from './logo.svg'
import css from './App.css'
import { ItemList } from './components/index.js'

class App extends Component {
  render() {
    return (
      <section className={css['app']}>
      <header className={css['header']}><span className={css['title']}>foundry system</span></header>
        <ItemList className={css['item-list']}/>
      </section>
    );
  }
}

export default App
