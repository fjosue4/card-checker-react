import React from "react";
import './HowItWorks.css';

export class HowItWorks extends React.Component {
    render() {
        return(
            <div className="how-it-works">
                <h3>How does it work?</h3>
                <div className="steps">
                    <div className="step">
                    <h2>Step #1</h2>
                    <p>Type or paste the card number you want to check.</p>
                    </div>
                    <div className="step">
                    <h2>Step #2</h2>
                    <p>We analyze the card using the <a href="https://en.wikipedia.org/wiki/Luhn_algorithm" rel="noreferrer" target="_blank" className="link">Luhn algorithm</a>.</p>
                    </div>
                    <div className="step">
                    <h2>Step #3</h2>
                    <p>The result is displayed on screen determining the validity.</p>
                    </div>
                </div>
            </div>
        )
    }
}