const { test } = require("@playwright/test");
const LoginPage = require("./pages/loginPage");
const HomePage = require("./pages/homePage");
const loginInfo = require("../tests/fixturesData/login");
const AddClientPage = require("./pages/addClient");

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage(loginInfo.loginUrl);
  await loginPage.login(loginInfo.username, loginInfo.password);
});

test("Login to Portal and save new client", async ({ page }) => {
  const addClientPage = new AddClientPage(page);
  const clientName = "Client_" + Math.floor(Math.random() * 1000);
  const homePage = new HomePage(page);
  await homePage.verifyLogin();
  await addClientPage.addClient(clientName);
  await addClientPage.searchAndClickViewButton(clientName);
});
