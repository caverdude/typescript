import { City, Person, Product, Employee} from "./dataTypes";

let myVar: keyof Product= "name";
myVar = "price";

function getValue<T, K extends keyof T> (item: T, keyname: K){
        console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");

/*
let products = [new Product("Running Shoes",100), new Product("Hat", 25)];

type shapeType = {name:string};

class Collection<T extends shapeType> implements Iterable<T>{
        private items: Map<string, T>;
        constructor(private initialItems: T[]=[]) {
                this.items = new Map<string,T>();
                this.add(...initialItems);
        }

        add(...newItems:T[]): void {
                newItems.forEach(newItem => this.items.set(newItem.name, newItem));
        }
        get(name:string): T{
                return this.items.get(name);
        }
        get count(): number {
                return this.items.size;
        }
        [Symbol.iterator]():Iterator<T>{
                return this.items.values();
        }
}
let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);

[...productCollection].forEach(p=> console.log(`Product ${p.name}, ${p.price}`));

/*
let iterator: Iterator<Product>= productCollection.values();
let result: IteratorResult<Product> = iterator.next();
while(!result.done){
        console.log(`Product ${result.value.name}, ${ result.value.price}`);
        result = iterator.next();
}
*/

