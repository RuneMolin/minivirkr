import React from 'react'

import {getVirkrVirksomhed} from '../../API'

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

  componentWillMount() {
    const {cvrnr} = this.props.match.params;
    console.log(cvrnr);
    this.vaelgCvrNr(cvrnr);
  }

  vaelgCvrNr = (cvrnr) => {
    getVirkrVirksomhed(cvrnr)
    .then(resultat => this.setState({virksomhed: resultat}))
  }
  
  render() {

    if (this.state.virksomhed == null) {
        return <div>Øjeblik henter lige data for virksomheden</div>
    }

    const {virksomhedMetadata} = this.state.virksomhed
    const {nyesteNavn, nyesteBeliggenhedsadresse} = virksomhedMetadata

    return (
        <div>
            <br />
            <h2>{nyesteNavn.navn}</h2>
            <h2>{nyesteBeliggenhedsadresse.adresselinie}</h2>
        </div>
    )
  }
}