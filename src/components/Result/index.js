import React from 'react'
import _ from 'lodash'

import { connect } from 'react-redux';

import { retrieveCompany, retrievePerson } from '../../actions'

import Virksomheder from './Virksomheder'
import VirksomhedsDetaljer from './Virksomheder/Detaljer'
import Personer from './Personer'

const Result = ({ search, company, person, retrieveCompany, retrievePerson }) => {
  // Show selected company only
  if (!_.isEmpty(company)) {
    return (
      <div>
        <br />
        <div className='row'>
          <div className='col-md-12'>
            <VirksomhedsDetaljer virksomhed={company} />
          </div>
        </div>
      </div>
    )
  }

  // No search result to show yet ?
  if (_.isEmpty(search.result)) {
    return null
  }

  // Show list of persons and list of companies
  const { virksomhedSoegeresultat, deltagerSoegeresultat } = search.result

  return (
    <div>
      <br />
      <div className='row'>
        <div className='col-md-12'>
          <Personer data={deltagerSoegeresultat.deltagere} onSelectPerson={retrievePerson} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <Virksomheder data={virksomhedSoegeresultat.virksomheder} onSelectCompany={retrieveCompany} />
        </div>
      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    company: state.company,
    person: state.person
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveCompany: (cvrnr) => dispatch(retrieveCompany(cvrnr)),
    retrievePerson: (personId) => dispatch(retrievePerson(personId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
