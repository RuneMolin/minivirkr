import React from 'react'
import _ from 'lodash'

import Virksomheder from './Virksomheder'
import VirksomhedsDetaljer from './Virksomheder/Detaljer'
import Personer from './Personer'

export default class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {resultat, virksomhed, vaelgCvrNr} = this.props

    if (!_.isEmpty(virksomhed)) {
      return (
        <div>
          <br/>
          <div className='row'>
            <div className='col-md-12'>
              <VirksomhedsDetaljer virksomhed={virksomhed}/>
            </div>
          </div>
        </div>
      )
    }

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
            <Virksomheder data={virksomhedSoegeresultat.virksomheder} vaelgCvrNr={vaelgCvrNr}/>
          </div>
        </div>
      </div>
    )
  }

}
