const {calculateTotal, calculateTax, calculateDiscount}=require('./exercise');
describe('calculateTotal',()=>{

    it('should return the total price of the products with discount and salestax',()=>{
        let input = [{name: 'soap', price: 1000}, {name: 'toothpaste', price: 5000}, {name: 'toothbrush', price: 3000}, {name: 'towel', price: 2000}, {name: 'shampoo', price: 4000}];
        let result = calculateTotal(input);
        expect(result).toBe(14580);
    });

    test("Should return the total amount with tax of 0.08", ()=>{
        input = 14580;
        taxRate = 0.08;
        let result = calculateTax(input, taxRate);
        expect(result).toBeCloseTo(15746.4);
    })

    test("Should return the total amount with discount of 0.9", ()=>{
        input = 15746.4;
        discountRate = 0.9;
        let result = calculateDiscount(input, discountRate);
        expect(result).toBeCloseTo(14171.76);
    })

    it("Should return zero if product array is empty", ()=>{
        input = [];
        let results = calculateTotal(input)
        expect(results).toBe(0)
    })


});



// describe("Calculate eplyment pay", ()=>{
//    // 
// }