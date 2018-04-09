import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

export default class Virksomheder extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick = (cvrnr) => {
    this.props.vaelgCvrNr(cvrnr)
  }

  render() {
    const {data} = this.props

    if (_.isEmpty(data)) {
      return (<h4>Ingen virksomheder fundet</h4>)
    }

    const rows = data.map((virksomhed) => {
      return (<tr key={virksomhed.cvrnr}>
        <td>
          <a href='#' onClick={() => this.onClick(virksomhed.cvrnr)}>{virksomhed.cvrnr}</a>
        </td>
        <td>{virksomhed.navn}</td>
        <td>{virksomhed.adresseTekst}</td>
      </tr>)
    })

    return (<div>
      <h4>Virksomheder</h4>
      <table className='table table-striped table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th>CVR nr.</th>
            <th>Navn</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>)
  }
}

Virksomheder.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        cvrnr: PropTypes.string.isrRequired,
        navn: PropTypes.string, adresseTekst:
        PropTypes.string
      }
    )).isRequired,
  vaelgCvrNr: PropTypes.func.isRequired
}
