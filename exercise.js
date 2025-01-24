// const products=[{saop: 1000, toothpaste: 5000, toothbrush: 3000, towel: 2000, shampoo: 4000}];

// function calculateTotal(){
//     let total = 0;
//     for (let product in products){
//         total += products[product];
//     }
//     return total;
// }
// console.log(calculateTotal(products));


function calculateTotal(products) {
      if(products.length === 0) return 0;
      let productTotal =  products.reduce((a,b)=>a + b.price,0)
    //   console.log(productTotal, 'productTotal');
    // return productTotal;
    
    // console.log(total);
    ;
    TaxedProductTotal = calculateTax(productTotal, 0.08);
    // console.log(TaxedProductTotal, 'TaxedProductTotal');

    if (TaxedProductTotal > 100) {
      return calculateDiscount(TaxedProductTotal, 0.9);
    }
    return TaxedProductTotal;
  }


function calculateTax(productTotal, taxRate) {
return productTotal + (productTotal * 0.08);
}

function calculateDiscount(productTotal, discountRate) {
  return productTotal * discountRate;
}

  console.log(calculateTotal([{name: 'soap', price: 1000}, {name: 'toothpaste', price: 5000}, {name: 'toothbrush', price: 3000}, {name: 'towel', price: 2000}, {name: 'shampoo', price: 4000}]));
  console.log(calculateTotal([{name: 'soap', price: 100}, {name: 'toothpaste', price: 5000}, {name: 'toothbrush', price: 3000}, {name: 'towel', price: 2000}, {name: 'shampoo', price: 4000}]));

  module.exports={calculateTotal, calculateTax, calculateDiscount};