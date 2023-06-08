const puppeteer = require('puppeteer')
const links = require('../step_definitions/links')

let browser;
let page;

// Launches web browser
async function launchBrowser() {
    browser = await puppeteer.launch({
      headless: true
  });

    page = await browser.newPage();

}

// Navigates to URL
async function loadPage(url) {
    await page.setViewport({ width: 1920, height: 1080});
    //accepts cookies
    page.on('dialog', async dialog => {
      await dialog.accept();
    })
    //
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 60000
    })

}

// Clicks on element
async function clickElementByText(text) {
    const elementText = text;
    const element = await page.$('xpath=//*[contains(text(), "' + elementText + '")]');
  
    if (element) {
      await element.click();
    } else {
      console.log('Element not found!');
    }

}

//Wait for 3 seconds
async function wait(time) {
    const waitTime = time;
    await page.waitForTimeout(waitTime * 1000);

}

// Capture full page screenshot
async function takeScreenshot(pageTitle) {
    await page.screenshot({
    path: '../football_scores/screenshots/' + pageTitle + '_screenshot.jpg'
  })
    
};

// Capture element screenshot
async function takeElementScreenshot() {
    await page.waitForSelector('.qa-tables');
    const element = await page.$('.qa-tables');
    await element.screenshot({
      path: '../football_scores/screenshots/premtable.jpg'});
};

// Close the browser
async function closeBrowser() {
  await browser.close();
  
};

module.exports = { 
    launchBrowser,
    loadPage,
    clickElementByText,
    takeScreenshot,
    takeElementScreenshot,
    closeBrowser,
    wait

}
