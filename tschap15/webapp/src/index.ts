import { LocalDataSource } from "./data/localDataSource";
//import { HtmlDisplay } from "./htmlDisplay";
//import "bootstrap/dist/css/bootstrap.css";

async function displayData(): Promise<string> {
    let ds = new LocalDataSource();
    let allProducts = await ds.getProducts("name");
    let categories = await ds.getCategories();
    let chessProducts = await ds.getProducts("name", "Chess");
    console.log(chessProducts.length);
    let result = "";
    allProducts.forEach(p => result += `Product: ${p.name}, ${p.category}, ${p.price}\n`);
    categories.forEach(c => result += (`Category: ${c}\n`));
    chessProducts.forEach(p=> ds.order.addProduct(p,1));
    result+=`Order total: $${ds.order.total.toFixed(2)}`;
    return result;
}

//let ds = new LocalDataSource();

/*function displayData(): Promise<HTMLElement> {
    let display = new HtmlDisplay();
    display.props = {
        dataSource: ds
    }
    return display.getContent();
}*/

displayData().then( res => console.log(res));
/*
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        });
    }
};*/