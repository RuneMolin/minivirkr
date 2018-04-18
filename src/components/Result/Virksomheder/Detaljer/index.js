import React from 'react'
import PropTypes from 'prop-types';

// se nine.json for alle data virkr returnerer ved et opslag
const VirksomhedsDetaljer = ({virksomhed}) => {
  const {virksomhedMetadata} = virksomhed
  const {nyesteNavn, nyesteBeliggenhedsadresse} = virksomhedMetadata

  return (
    <div>
      <h2>{nyesteNavn.navn}</h2>
      <h2>{nyesteBeliggenhedsadresse.adresselinie}</h2>
    </div>
  )
}

// Example of using PropTypes to define the props a component expects
VirksomhedsDetaljer.propTypes = {
  virksomhed: PropTypes.object.isRequired
}

export default VirksomhedsDetaljer
