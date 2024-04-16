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

test('Login to Portal and Search for "Tim Cook & Sons"', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyLogin();
  await homePage.searchForClient("Tim Cook & Sons");
});

test("Login to Portal and save new client", async ({ page }) => {
  const addClientPage = new AddClientPage(page);
  const randomClientName = generateRandomName();
  await addClientPage.addClient(randomClientName);
});

function generateRandomName() {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomName = "";
  for (let i = 0; i < 8; i++) {
    randomName += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomName;
}
