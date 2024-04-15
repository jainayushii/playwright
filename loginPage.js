class LoginPage {
    constructor(page) {
      this.page = page;
      this.username='input[id="username"]';
      this.password='input[id="password"]';
      this.loginButton='input[value="Login"]';
    }
  
    async navigateToLoginPage(loginUrl) {
      await this.page.goto(loginUrl);
    }
  
    async login(username, password) {
      await this.page.fill(this.username, username);
      await this.page.fill(this.password, password);
      await this.page.click(this.loginButton);
    }
  }
  
  module.exports = LoginPage;