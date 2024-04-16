class AddClientPage {
  constructor(page) {
    this.page = page;
    this.clientName = 'input[id="txtclientName"]';
    this.saveButton = 'button[id="btnSave"]';
    this.okPopUp = ".swal2-confirm.swal2-styled";
  }

  async addClient(clientName) {
    await this.page.fill(this.clientName, clientName);
    await this.page.click(this.saveButton);
    await this.page.click(this.okPopUp);
  }
}

module.exports = AddClientPage;
