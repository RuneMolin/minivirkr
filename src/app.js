import React from 'react'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Result from './components/Result'
import Error from './components/Error'

import {searchVirkr, getVirkrVirksomhed} from './API'

/**
 * The main application component
 */
export default class MiniVirkr extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resultat: {},
      virksomhed: {},
      fejl: {}
    }

    this.searchCvr = this.searchCvr.bind(this)
    this.vaelgCvrNr = this.vaelgCvrNr.bind(this)
  }

  searchCvr(term) {
    searchVirkr(term)
    .then(resultat => this.setState({resultat: resultat, fejl: {}, virksomhed: {}}))
    .catch(err => this.setState({resultat: {}, virksomhed: {}, fejl: err}))
  }

  vaelgCvrNr = (cvrnr) => {
    getVirkrVirksomhed(cvrnr)
    .then(resultat => this.setState({virksomhed: resultat}))
  }


  render() {
    const {resultat, virksomhed, fejl} = this.state
    return (
      <div>
        <Header />
        <div className='container'>
          <SearchBar submit={this.searchCvr}/>
          <Result resultat={resultat} virksomhed={virksomhed} vaelgCvrNr={this.vaelgCvrNr}/>
          <Error error={fejl}/>
        </div>
      </div>
    )
  }

}
