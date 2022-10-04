import React from "react";
import { NavBar } from "../NavBar/NavBar";
import './Header.css'

export class Header extends React.Component {
    render() {
        return(
        <header>
            <h3>Card Checker Tool</h3>
            <NavBar />
        </header>)
        
    
}
}