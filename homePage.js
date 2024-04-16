const { test, expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.organizationTitleLocator = ".title-orgnization-info";
    this.searchInput = 'input[name="searchParameters"]';
  }

  async verifyLogin() {
    await expect(await this.page.locator(this.organizationTitleLocator).innerText()).toBe(
      "Program Portals / All Clients"
      //comment
    );
  }

  async searchForClient(clientName) {
    await this.page.fill(this.searchInput, clientName);
    await this.page.press(this.searchInput, "Enter");
  }
}

module.exports = HomePage;