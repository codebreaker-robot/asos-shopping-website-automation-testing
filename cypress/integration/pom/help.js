class help {
  helpPage(value) {
    cy.scrollTo("bottom");
    cy.get(":nth-child(1) >._1OV98kg").first().click().should("contain", value);
  }
  contactUsNow(value) {
    cy.get(".Button_button").click().should("contain", value);
  }
  liveChatOption(value) {
    cy.get(".CardListAnchorItem_textWrapper")
      .contains(value)
      .click({ force: true });
  }
  orderTopic(value) {
    cy.get(":nth-child(4) > .TopicSelector_button")
      .should("contain", value)
      .click({ force: true });
  }
  orderSubTopic(value) {
    cy.get(":nth-child(5) > .TopicSelector_button")
      .should("contain", value)
      .click();
  }
  userDetailsManual() {
    cy.get(".LoginBox_link").click();
  }
  orderNum(orderNo) {
    cy.get("#order_number").click().type(orderNo)
  }
  firstName(fname) {
    cy.get("#first_name").click().type(fname);
  }
  lastName(lname) {
    cy.get("#last_name").click().type(lname);
  }
  telephoneNum(phone) {
    cy.get("#telephone").click().type(phone);
  }
  emailId(email) {
    cy.get("#email").click().type(email);
  }
  confirmEmail(email) {
    cy.get('#confirm_email').click().type(email);
  }
  furtherDetails(text) {
    cy.get("#further_details").click().type(text);
  }
  submitChat(msg) {
    cy.get(".Form_submit > .Button_button").should("contain", msg).click();
  }
}
module.exports = new help();
