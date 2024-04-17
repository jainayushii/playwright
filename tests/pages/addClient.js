class AddClientPage {
  constructor(page) {
    this.page = page;
    this.clientName = 'input[id="txtclientName"]';
    this.saveButton = 'button[id="btnSave"]';
    this.okPopUp = ".swal2-confirm.swal2-styled";
    this.viewButton = 'button[value="View"]';
    this.searchInput = 'input[name="searchParameters"]';
    this.clientTable = ".jsgrid-table";
  }

  async addClient(clientName) {
    await this.page.fill(this.clientName, clientName);
    await this.page.click(this.saveButton);
    await this.page.click(this.okPopUp);
  }

  async searchAndClickViewButton(clientName) {
    await this.page.fill(this.searchInput, clientName);
    await this.page.press(this.searchInput, "Enter");
    await this.page.waitForSelector(this.clientTable);
    await this.page.click(this.viewButton, {force:true},{ timeout: 5000 });
  }
}

module.exports = AddClientPage;
