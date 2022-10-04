import React from "react";
import { Icon } from '@iconify/react'
import './ThemeToggler.css'

export class ThemeToggler extends React.Component {
    render(){
        return (
        <div className="theme-toggler">
            <Icon icon="charm:sun" id="sun-icon" className="active" />
            <Icon icon="charm:moon" id="moon-icon" className="inactive" />
        </div>)
    }
}