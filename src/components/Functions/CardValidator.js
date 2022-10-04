let cardValid;

export const cardValidatorFunction = num => {
  let cardValue = num;
  cardValue = cardValue.toString().split('');
  cardValue = cardValue.map(str => {
    return Number(str);
  });
    console.log(cardValue);
    
    let arr = cardValue;
    let reversedCard = [...arr].reverse();
  for (let i = 1; i < reversedCard.length; i += 2) {
    reversedCard[i] *= 2;
     if (reversedCard[i] > 9) {
      reversedCard[i] -= 9;
       }
     }
     let cardSum = reversedCard.reduce((prev, curr) => prev + curr);
     let validator = (cardSum % 10);
     if(validator === 0) {
     cardValid = true;
     } else {
      cardValid = false;
     }
     return cardValid;
  
  }