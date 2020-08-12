import React, {Component} from 'react'

class Header extends React.Component{
    render(){
        return(
           
                <nav className="navbar navbar-expand-lg " color-on-scroll="500">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#pablo"> Dashboard </a>
                    <button href="" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar burger-lines"></span>
                        <span className="navbar-toggler-bar burger-lines"></span>
                        <span className="navbar-toggler-bar burger-lines"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                    <i className="nc-icon nc-palette"></i>
                                    <span className="d-lg-none">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <span className="no-icon">Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        )
    }
}

export default Header;