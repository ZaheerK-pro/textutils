import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import propTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg nav navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand font-weight-bold" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-a mx-3  font-weight-bold" to="/">{props.HomeP}<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-a mx-3  font-weight-bold" to="/service">{props.serviceText}<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-a mx-3  font-weight-bold" to="/aboutt">{props.aboutText} <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
  </div>
  </div>
</nav>
  )
}
