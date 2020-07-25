import React, { Component } from 'react';

class Menu extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/597px-SARS-CoV-2_without_background.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
            &nbsp; COVID-19 Tracker (India)
            </a>
            <a className="navbar-brand" href="https://github.com/anoopkrsharma" target="blank">
            Created by: Anoop Kumar Sharma
            </a>
            </nav>
        );
    }
}

export default Menu;