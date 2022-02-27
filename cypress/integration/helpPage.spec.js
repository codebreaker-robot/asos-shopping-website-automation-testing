import addToCart from "../integration/pom/addToCart";
import help from "../integration/pom/help";
const data = require("../fixtures/helpPage.json");
const formData = require("../fixtures/formDetails.json");
describe("Help & Contact Us Now Functionality", () => {
  it("Visit ASOS Home Page", () => {
    addToCart.visit();
  });
  it("Visit HelpPage", () => {
    help.helpPage(data.helpTitle);
  });
  it("User has issue regarding order placed and user will click on Contact Us Now", () => {
    help.contactUsNow(data.contactUsNow);
  });
  it("User will connect through Live Chat Option regarding issue", () => {
    help.liveChatOption(data.liveChatOption);
  });
  it("User is having issue releated to order and will click on order topic", () => {
    help.orderTopic(data.orderTopic);
  });
  it("User has query related to cancel order", () => {
    help.orderSubTopic(data.subTopic);
  });
  it("User clicks on fill details manually link", () => {
    help.userDetailsManual();
  });
  it("Fill the details manually and click on start chat", () => {
    help.orderNum(formData.orderNo);
    help.firstName(formData.first_name);
    help.lastName(formData.last_name);
    help.telephoneNum(formData.telephone)
    help.emailId(formData.email);
    help.confirmEmail(formData.email);
    help.furtherDetails(formData.furtherDetails);
    help.submitChat(formData.startChatMsg);
  });
});
