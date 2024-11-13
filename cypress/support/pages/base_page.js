
// This is not working as of now.
class base_page {
  click_web_element(element) {
    element.click();
  }

  fill_text_box(element, textToFill) {
    
    element.type(textToFill);
  }
}

export default new base_page();
