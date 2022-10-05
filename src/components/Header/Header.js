import React from "react";
import { Icon } from "@iconify/react";
import './Header.css'

export class Header extends React.Component {
    constructor(props){
        super(props)
        this.handleThemeToggle = this.handleThemeToggle.bind(this)
    }

    handleThemeToggle(){
        this.props.onClick(this.toggleTheme)
    }

    render() {
        return(
        <header>
            <h3>Card Checker Tool</h3>
            <div className="nav-bar">
            <a target='_blank' rel="noreferrer" href="https://github.com/fjosue4/credit-card-checker-react"><Icon icon="akar-icons:github-fill" /></a>
            <div className="theme-toggler" onClick={this.handleThemeToggle}>
            <Icon icon="charm:sun" id="sun-icon" className="active" />
            <Icon icon="charm:moon" id="moon-icon" className="active" />
        </div>
            </div>
        </header>)
        
    
}
}