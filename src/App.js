import React, { Component } from 'react'
import logo from './logo.svg'
import css from './App.css'
import { ItemList, ResourceList } from './components/index.js'

class App extends Component {
  render() {
    return (
      <section className={css['app']}>
        <header className={css['header']}><span className={css['title']}>foundry system</span></header>
        <section className={css['lists']}>
          <ResourceList />
          <ItemList className={css['item-list']}/>
        </section>
      </section>
    );
  }
}

export default App
