const puppeteer = require('puppeteer')
const links = require('../step_definitions/links')

let browser;
let page;

// Launches web browser
async function launchBrowser() {
    browser = await puppeteer.launch({
      headless: false
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
    const elementText = 'Tables';
    const element = await page.$('xpath=//*[contains(text(), "' + elementText + '")]');
  
    if (element) {
      await element.click();
    } else {
      console.log('Element not found!');
    }

}

//Wait for 3 seconds
async function wait() {
  await page.waitForTimeout(3 * 1000);

}

// Capture full page screenshot
async function takeScreenshot() {
    await page.screenshot({
    path: 'C:/repos/Projects/football_scores/screenshots/fullpage.jpg'
  })
    
};

// Capture screenshot
async function takeElementScreenshot() {
    await page.waitForSelector('#u8081644950679367 > div > div:nth-child(2) > div > div > div.qa-tables > div > div > table');
    const element = await page.$('#u8081644950679367 > div > div:nth-child(2) > div > div > div.qa-tables > div > div > table');
    await element.screenshot({path: 'C:/repos/Projects/football_scores/screenshots/premtable.png'});
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
