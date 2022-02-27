class brands{
    menuButton(){
        cy.get('[data-testid="burger-menu-button"]')
        .click({force:true})
    }
    menSection(value){
        cy.get('button[data-testid="men-floor"]')
        .contains(value)
        .click({force:true})
    }
    brandsPage(){
        cy.get(':nth-child(10) > button')
        .first()
        .click({force:true})
    }
    asosBrands(value){
        cy.get('._1idZTbE').contains(value)
        .click({force:true})
    }
    asosBrandsTitle(value){
    cy.get('._1hVpqlz')
    .should('contain',value)
    }
    sort(value){
        cy.get('._2pwX7b9').contains(value)
        .click({force:true})
    }
    sortBasis(value){
        cy.get('#plp_web_sort_whats_new')
        .click()
        .should('contain',value)
    }
    newItem(value){
        cy.get('div > h2').contains(value).click()
        .should('contain',value)
    }
    productCode(value){
        cy.get('.product-code > p')
        .should('contain',value)
    }

}
module.exports=new brands();