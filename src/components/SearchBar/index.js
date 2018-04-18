import React from 'react'
import { connect } from 'react-redux';
import { search } from '../../actions'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: props.search.term
    }
  }

  // Update internal state when 'search.term' prop is updated by 'RESET' action
  componentWillReceiveProps(newProps) {
    if (this.state.term !== newProps.search.term) {
      this.setState({ term: newProps.search.term })
    }
  }

  formSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchSearch(this.state.term)
  }

  update = (event) => {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.formSubmit}>
            <div className="input-group">
              <input type='text' className='form-control' placeholder='Personnavn, virksomhedsnavn eller CVR nummer' value={this.state.term} onChange={this.update} />
              <span className="input-group-btn">
                <input className='btn btn-primary' type='submit' value='Søg' />
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSearch: (term) => dispatch(search(term))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)



