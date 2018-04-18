import React from 'react'

import Search from './components/Search'
import Virksomhed from './components/Virksomhed'
import Header from './components/Header'

import { HashRouter as Router, Route, Link } from "react-router-dom";


/**
 * The main application component
 */
export default class MiniVirkr extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className='container'>
            <Route exact path="/" component={Search} />
            <Route path="/virksomhed/:cvrnr" component={Virksomhed} />
          </div>
        </Router>
      </div>
    )
  }
}
