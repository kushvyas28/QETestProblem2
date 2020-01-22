var {Given, When, Then} = require('cucumber');
var {setDefaultTimeout} = require('cucumber'); setDefaultTimeout(60 * 1000);

Given(/^User navigates to "([^"]*)"$/, function (website) {
    browser.waitForAngularEnabled(false);
    return browser.get(website);
  });

  When(/^User search for product "([^"]*)"$/, function (product) {
      element(by.xpath('//input[@name=\'field-keywords\']')).sendKeys(product);
      return element(by.xpath('//div[@class=\'nav-search-submit nav-sprite\']//input[@class=\'nav-input\']')).click();
  });

  Then('User add the product to cart and proceed to checkout', function () {
    element(by.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[4]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]/a[1]/span[1]')).click();
    element(by.xpath('//input[@id=\'add-to-cart-button\']')).click();
    return element(by.xpath('//a[@id=\'hlb-ptc-btn-native\']')).click();
});