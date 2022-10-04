import React from "react";
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { Icon } from "@iconify/react";
import './NavBar.css'

export class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <a target='_blank' rel="noreferrer" href="https://github.com/fjosue4/credit-card-checker-react"><Icon icon="akar-icons:github-fill" /></a>
                <ThemeToggler />
            </div>
        )
    }
}