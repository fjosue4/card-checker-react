  // Card generator

export let visaCard;
export let masterCard;
export let amexCard;

export function storeCards() {
    card1 = [4];
    card2 = [5];
    card3 = [3];
      createCards();
      visaCard = card1.toString().replace(/[\,]/gi, '');
      masterCard = card2.toString().replace(/[\,]/gi, '');
      amexCard = card3.toString().replace(/[\,]/gi, '');
  }
  
  let card1 = [4]; // Visa (16 digit) should start with (4xxxx)
  let card2 = [5]; // MasterCard (16 digit) should start with (51xxxx ... 55xxx)
  let card3 = [3]; // AMEX (15 digit) should start with (34 || 37)
  
   function createVisa() {
      for(let i=0; i < 15; i++) {
        let currNum = Math.floor(Math.random()*10);
        card1.push(currNum);
      }
  }
  
    function createMasterCard() {
    let secondNumRandom = Math.floor(Math.random()*5)
    switch (secondNumRandom) {
      case 0:
        card2.push(1)
      break;
      case 1:
        card2.push(2)
      break;
      case 2:
        card2.push(3)
      break;
      case 3:
        card2.push(4)
      break;
      case 4:
        card2.push(5)
      break;
      default: card2.push(1)
        break;
    }
    for(let i=0; i<14; i++){
      let currNum = Math.floor(Math.random()*10);
      card2.push(currNum);
    }
  }
  
  function createAmex(){
    let secondNumRandom = Math.floor(Math.random()*2)
    switch (secondNumRandom) {
      case 0:
        card3.push(4)
      break;
      case 1:
        card3.push(7)
      break;
    
      default: card3.push(4)
        break;
    }
    for(let i=0; i<13; i++){
      let currNum = Math.floor(Math.random()*10)
        card3.push(currNum)
    }
  }
  
 export function createCards() {
  createVisa();
  createMasterCard();
  createAmex();
  }
