const { test } = require("@playwright/test");
const LoginPage = require("../tests/loginPage/loginPage")
const HomePage = require("../tests/homePage/homePage");
const loginInfo = require("../tests/fixturesData/login");

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage(loginInfo.loginUrl);
  await loginPage.login(loginInfo.username, loginInfo.password);
});

test('Login to Portal and Search for "Tim Cook & Sons"', async ({ page }) => {
 const homePage = new HomePage(page);
  await homePage.verifyLogin();
  await homePage.searchForClient("Tim Cook & Sons");
});