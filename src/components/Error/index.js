import React from 'react'

const Error = ({ error }) => {
  if (error.message) {
    return (
      <div className='alert alert-danger'>
        <h4 className='alert-heading'>Fejl!</h4>
        <p>{error.message}</p>
      </div>
    )
  } else {
    return null
  }
}

export default Error
