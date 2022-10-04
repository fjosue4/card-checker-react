import React from "react";
import './CardInput.css';


export class CardInput extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let cardNumberInput = e.target.value
        this.props.onChange(cardNumberInput)
    }
    
    render() {
        let clickedCard = this.props.evaluate;
        return (
            <div className="card-input-space">
                <h4>Type or paste a card to check</h4>
                <input type="number" name="card" id="card-input" onChange={this.handleChange} value={this.props.evaluate} placeholder="Card number goes here..."/>
            </div>
            )
    }
}