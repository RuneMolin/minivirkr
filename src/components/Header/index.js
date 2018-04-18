import React from 'react'
import { connect } from 'react-redux';
import logo from './nine_logo_web.svg'
import './style.css'
import { reset } from '../../actions'

const Header = ({ reset }) => (
  <nav className='navbar navbar-light bg-light'>
    <a href='#' onClick={(e) => { e.preventDefault(); reset() }} className='navbar-left'><img src={logo} /></a>
    <span className='navbar-right'><h4>Mini Virkr Hackaton</h4></span>
  </nav>
)

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset())
  }
}

export default connect(null, mapDispatchToProps)(Header)
