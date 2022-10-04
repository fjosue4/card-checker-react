import React from "react";
import './CardGenerator.css'
import { Icon } from "@iconify/react";
import {storeCards, visaCard, masterCard, amexCard} from '../Functions/GenerateCards'
import { cardBrands } from "../Functions/CardBrands";
import { cardValidatorFunction } from "../Functions/CardValidator";
import { CardResult } from "../Functions/CardResult";

export class CardGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = {sectionNumber: 0}
        this.handleSecondSection = this.handleSecondSection.bind(this)
        this.handleThirdSection = this.handleThirdSection.bind(this)
        this.assignCard = this.assignCard.bind(this)
    }

    handleSecondSection() {
        storeCards();
        this.setState({
            sectionNumber: 1
        })
    }

    handleThirdSection() {
        this.setState({
            sectionNumber: 2
        })
    }

    assignCard(p){
        let cardClicked = p.target.outerText;
        if(isNaN(cardClicked)) {
        this.props.onClick('')
        } else {
        this.props.onClick(cardClicked)
    }
    }

    render() {
        let cardNumber = this.props.evaluate;
        if (cardNumber !== '') {
            // Assign brand
            let brandIcon;
            let brandText;
            switch (cardNumber[0]) {
                case '3':
                    brandIcon = cardBrands.amexCardIcon;
                    brandText = cardBrands.amexCardText;
                    break;
                case '4':
                    brandIcon = cardBrands.visaIcon;
                    brandText = cardBrands.visaText;
                    break;
                case '5':
                    brandIcon = cardBrands.MasterCardIcon;
                    brandText = cardBrands.masterCardText;
                    break;
                default:
                    brandIcon = cardBrands.invalidCardIcon;
                    brandText = cardBrands.invalidCardText;
                    break;
            }

            let cardValue;
            cardValue = this.props.evaluate;
            let isValid = cardValidatorFunction(cardValue);
            return (
                <div className="right-module validate-card" id="validate-card">
                <h4 id="result">Result</h4>
                <div className="random-cards-list results">
                    <div className="card-brand">
                        <div id="card-brand-logo">{brandIcon}</div>
                        <p id="card-brand-text">{brandText}</p>
                    </div>
                    <div className="card-validity">
                        <div id="card-validity-icon">{isValid ? CardResult.validIcon : CardResult.notValidIcon}</div>
                        <p id="card-validity-text">{isValid ? CardResult.validText : CardResult.notValidText}</p>
                    </div>
                </div>
                <button className="card-generator" id="clear-input" onClick={this.assignCard}>Generate more random cards</button>
            </div>
            )
        } else if (this.state.sectionNumber === 0) {
        return (
            <div className="no-card">
            <h4 className="section-title"> Don't have a card to check?</h4>
            <button className="card-generator" id="generator-1" onClick={this.handleSecondSection}>Generate random cards</button>
            </div>
        )
    } else if (this.state.sectionNumber === 1) {
        return (
        <div className="generated-card" id="generated-card">
            <h4>Choose one of these random cards</h4>
            <div className="random-cards-list">
                <div className="random-card">
                    <Icon icon="cib:cc-visa" className="card-icon" />
                    <p id="visa-card" className="card-plaintext" onClick={this.assignCard}>{visaCard}</p>
                </div>
                <div className="random-card">
                    <Icon icon="cib:cc-mastercard" className="card-icon" />
                    <p id="mastercard-card" className="card-plaintext"onClick={this.assignCard}>{masterCard}</p>
                </div>
                <div className="random-card">
                    <Icon icon="cib:cc-amex" className="card-icon" />
                    <p id="amex-card" className="card-plaintext"onClick={this.assignCard}>{amexCard}</p>
                </div>
            </div>
            <button className="card-generator regenerate-card" id="generator-2" onClick={this.handleSecondSection}>Generate random cards</button>
        </div>

        )
    }

    }

}