import React from 'react'
import _ from 'lodash'

import {getVirkrVirksomhed} from '../../API'
import Virksomheder from './Virksomheder'
import Personer from './Personer'

export default class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {resultat} = this.props

    // Nothing to show yet
    if (_.isEmpty(resultat)) {
      return null
    }

    const {virksomhedSoegeresultat, deltagerSoegeresultat} = resultat

    return (
      <div>
        <br/>
        <div className='row'>
          <div className='col-md-12'>
            <Personer data={deltagerSoegeresultat.deltagere}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Virksomheder data={virksomhedSoegeresultat.virksomheder}/>
          </div>
        </div>
      </div>
    )
  }

}
