const { test, expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.organizationTitleLocator = ".title-orgnization-info";
  }

  async verifyLogin() {
    await expect(
      await this.page.locator(this.organizationTitleLocator).innerText()
    ).toBe("Program Portals / All Clients");
  }
}

module.exports = HomePage;
