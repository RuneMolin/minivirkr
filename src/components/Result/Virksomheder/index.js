import React from 'react'
import _ from 'lodash'

const Virksomheder = (props) => {
  if (_.isEmpty(props.data)) {
    return (
      <h2>Ingen virksomheder fundet</h2>
    )
  }

  const rows = props.data.map((virksomhed) => {
    return (
      <tr key={virksomhed.cvrnr}>
        <td>{virksomhed.cvrnr}</td>
        <td>{virksomhed.navn}</td>
        <td>{virksomhed.adresseTekst}</td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Virksomheder</h2>
      <table className='table table-striped table-sm'>
        <thead>
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
    </div>
  )

}

export default Virksomheder
