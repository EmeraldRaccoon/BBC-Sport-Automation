const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber')
const generalSteps = require("../../../step_definitions/generalSteps.js")
const links = require("../../../step_definitions/links.js")

setDefaultTimeout(60 * 1000);

When('i open a browser', async function () {
    await generalSteps.launchBrowser();

});

Then('i open the url {string}', async function (string) {
    await generalSteps.loadPage(links.bbcFootball);

});

Then('i click the {string} element', async function (string) {
    await generalSteps.clickElementByText();
    
});

Then('i wait for {int} seconds', async function (int) {
    await generalSteps.wait(3);

});

Then('i take a screenshot of the page', async function () {
    await generalSteps.takeScreenshot();

});

Then('i close the browser', async function () {
    await generalSteps.closeBrowser();

});