import React from 'react'

import { connect } from 'react-redux';

import Header from './components/Header'
import Spinner from './components/Spinner'
import SearchBar from './components/SearchBar'
import Result from './components/Result'
import Error from './components/Error'

/**
 * The main application component
 */
const MiniVirkr = ({ request }) => {
  return (
    <div>
      <Header />

      <div className='container'>
        <SearchBar />

        {request.loading &&
          <Spinner />
        }

        {!request.loading &&
          <div>
            <Error error={request.error} />
            <Result />
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    request: state.request,
  }
}

export default connect(mapStateToProps)(MiniVirkr)
