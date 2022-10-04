import React from "react";
import { CardGenerator } from "../CardGenerator/CardGenerator";
import { CardInput } from "../CardInput/CardInput";
import './CardModule.css';

export class CardModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { evaluate: '', cardSelected: ''}
        this.evaluateCard = this.evaluateCard.bind(this);
        this.clearCard = this.clearCard.bind(this);
        this.assignCard = this.assignCard.bind(this);
    }

    evaluateCard(inputNumber) {
        this.setState (({
            evaluate: inputNumber
        })) 
    }

    clearCard() {
        this.setState (({
            evaluate: ''
        })) 
    }

    assignCard(cardClicked){
        this.setState (({
            evaluate: cardClicked
        })) 
    }

    render() {
        return (
            <div className="card-module">
                <CardInput onClick={this.assignCard} onChange={this.evaluateCard} evaluate={this.state.evaluate} className="left-module" />
                <CardGenerator evaluate={this.state.evaluate} onClick={this.assignCard} />
            </div>
        )
    }
}
