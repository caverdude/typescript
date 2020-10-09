let hat={
    name: "Hat",
    _price: 100,
    priceIncTax: 100*1.2,
    set price(newPrice){
        this._price=newPrice;
        this.priceIncTax = this._price*1.2;
    },
    get price(){
        return this._price;
    }
};

let boots = {
    name:"Boots",
    price:"100",
    get priceIncTax(){
        return Number(this.price)*1.2;
    }
}

let gloves = {
    productName:"Gloves",
    price:40
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price=20;

let sumPrices=(...numbers) => numbers.reduce((total, val) =>
        total+(Number.isNaN(Number(val))?0:Number(val)));

let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let propertyCheck = hat.price|| 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

let otherHat = { ...hat};
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = { ...hat, discounted: true};
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = { ...hat, price: 10};
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);