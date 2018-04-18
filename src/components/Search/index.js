import React from 'react'

import SearchBar from '../SearchBar'
import Result from '../Result'
import Error from '../Error'

import {searchVirkr} from '../../API'

/**
 * The main application component
 */
export default class MiniVirkr extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resultat: {},
      fejl: {}
    }
  }

  searchCvr = (term) => {
    searchVirkr(term)
    .then(resultat => this.setState({resultat: resultat, fejl: {}}))
    .catch(err => this.setState({resultat: {}, fejl: err}))
  }

  render() {
    return (
        <div>
          <SearchBar submit={this.searchCvr}/>
          <Result resultat={this.state.resultat}/>
          <Error error={this.state.fejl}/>
        </div>
    )
  }
}
