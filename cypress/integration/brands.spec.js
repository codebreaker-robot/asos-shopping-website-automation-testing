import addToCart from "./pom/addToCart";
import brands from "./pom/brands"
const data=require('../fixtures/brands.json')
describe("Brands Section", () => {
    it("Visit ASOS Home Page", () => {
      addToCart.visit()
    })
    it('Click on menu button and then click on brands section',()=>{
        brands.menuButton()
        cy.wait(2000)
        brands.menSection(data.menSection)
        brands.brandsPage()
    })
    it('Select Asos Brands from the list of brands',()=>{
        brands.asosBrands(data.asosBrand)
    })
    it("verify the title of asos brands page",()=>{
        brands.asosBrandsTitle(data.asosBrandsTitle)
    })
    it("Select the sort type from the Sort tab",()=>{
        brands.sort(data.sort)
        brands.sortBasis(data.sortBasis)
    })
    it('User should select the value from new items',()=>{
        brands.newItem(data.newItemName)
    })
    it('Verify the product code of the product',()=>{
        brands.productCode(data.productCode)
    })
})