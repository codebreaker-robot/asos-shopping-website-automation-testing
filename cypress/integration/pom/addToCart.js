class addToCart {
  visit() {
    cy.visit("/");
    cy.url().should("include", "asos");
  }
  search(value, value1) {
    cy.get('[data-testid="search-input"]').click().type(value);
    //click on the vans shoes women from the drop down
    cy.get("#search-result-1").click().should("contain", value1);
  }
  size(value) {
    cy.get('[data-dropdown-id="size"]').click().should("contain", value);
  }
  selectSpecificSize(value) {
    cy.get("._1TetmAG[type='search']").click({ force: true }).type(value);
    //select UK 5 from the result
    cy.get(".kx2nDmW").first().dblclick();
  }
  selectProduct() {
    //Select Vans Classic Old Skool trainers in black and white product
    cy.get("#product-24138122").click();
  }
  productTitle(value) {
    //verify product name
    cy.get(".product-hero").should("contain", value);
  }
  selectProductSize(value) {
    cy.get("#main-size-select-0").select(value);
  }
  addToCart(value) {
    cy.get('[data-bind="text: buttonText"]').click().should("contain", value);
  }
  naviagateToCart() {
    cy.wait(2000);
    //hover to cart page
    cy.get("._1z5n7CN").trigger("mouseover");
    //click on add to bag again
    cy.get(":nth-child(1) > ._1TlOB9h").click();
  }
  saveLater(value) {
    cy.get(".bag-item-moveToSaved").click().should("contain", value);
  }
}
module.exports = new addToCart();
