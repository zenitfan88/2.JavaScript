"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b,2) - 4*a*c;

  if (discriminant === 0) {
    arr.push(-b/(2*a));
  } else if (discriminant > 0 ) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)); 
  } else {
    arr.push();
  };

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let differenceAmount=amount-contribution;
  let monthPercent = percent / (12 * 100);
  
  let paymentMounth=differenceAmount * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  let amountReturn=Number((countMonths*paymentMounth).toFixed(2));

  if (typeof(percent) !== 'number') {
    alert(`Параметр percent содержит неправильное значение ${percent}`);
    return amountReturn = false;
    }else if (typeof(contribution) !== 'number') {
      alert(`Параметр percent содержит неправильное значение ${contribution}`);
      return amountReturn = false;
    }else if (typeof(amount) !== 'number') {
      alert(`Параметр percent содержит неправильное значение ${amount}`);
      return amountReturn = false;
    };

  return amountReturn;
}