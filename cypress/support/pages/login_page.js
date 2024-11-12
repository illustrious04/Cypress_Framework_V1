import base_page from "./base_page";
class login_page {
  // Define the elements
  elements = {
    text_box_email: () =>
      cy.xpath("//input[@placeholder='Registered email *']"),
    text_box_password: () => cy.get("input[placeholder='Password *']"),
    button_sign_in: () => cy.get("button[type='submit']"),
  };

  //Operations Method we want to perform

  fill_text_box_email(email) {
    //this.elements.text_box_email().type(email);
    base_page.fill_text_box(this.elements.text_box_email(), email);
  }

  fill_text_box_password(password) {
    //this.elements.text_box_password().type(password);
    base_page.fill_text_box(this.elements.text_box_password(), password);
  }

  click_sign_in_button() {
    //this.elements.button_sign_in().click();
    base_page.click_web_element(this.elements.button_sign_in);
  }
}

export default new login_page();
