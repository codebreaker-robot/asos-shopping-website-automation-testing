///<reference types='cypress'/>
import addToCart from "./pom/addToCart";
const data = require("../fixtures/addToCart.json");
describe("ASOS Add To Cart Functionality", () => {
  it("Visit ASOS Home Page", () => {
    addToCart.visit();
  });
  it("Search a product using search functionality", () => {
    addToCart.search(data.name,data.womenShoesName);
  });
  it("Visit to Size Tab and select UK 5 size from the dropdown list", () => {
    addToCart.size(data.sizeTitle);
    addToCart.selectSpecificSize(data.size);
  });
  it("Select Old Skool Vans Shoes Product and veirfy the title of product", () => {
    addToCart.selectProduct();
    addToCart.productTitle(data.productName);
  });
  it("Select Size of the product from the Size dropdown list", () => {
    addToCart.selectProductSize(data.size);
  });
  it("Add the product to cart and navigate to cart page", () => {
    addToCart.addToCart(data.addToCartMsg);
    addToCart.naviagateToCart();
  });
  it("Save the product for later", () => {
    addToCart.saveLater(data.saveForLater);
  });
});
