const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber')
const generalSteps = require("../../../step_definitions/generalSteps.js")
const links = require("../../../step_definitions/links.js")

setDefaultTimeout(60 * 1000);

When('i open a browser', async function () {
    await generalSteps.launchBrowser();

});

Then('i open the url {string}', async function (string) {
    await generalSteps.loadPage(string);

});

Then('i click the {string} element', async function (string) {
    await generalSteps.clickElementByText(string);
    
});

Then('i wait for {int} seconds', async function (int) {
    await generalSteps.wait(int);

});

Then('i take a screenshot of the {string} page', async function (string) {
    await generalSteps.takeScreenshot(string);

});

Then('i take a screenshot of the table element', async function () {
    await generalSteps.takeElementScreenshot();

});

Then('i close the browser', async function () {
    await generalSteps.closeBrowser();

});