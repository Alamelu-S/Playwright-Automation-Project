import {test,expect} from '@playwright/test';
import { OpenCartLoginPage} from '../pages/OpenCartLoginPage';
import logintestdata from '../test-data/logintestdata.json';

test.describe('SauceDemo Login Screenshot in Report', () => {

test('Valid Login Screenshot in Report',async({page})=>{
    
    const openCartLogin = new OpenCartLoginPage(page)
    await page.goto('https://www.saucedemo.com/');
    await openCartLogin.login(logintestdata.validUser.username,
                                logintestdata.validUser.password);
    
    // Verify user is on products page
    const titleName = await page.locator('.title');
    await expect(titleName).toHaveText('Products');

    // Take screenshot of the element
    //const screenshotBuffer = await titleName.screenshot(); -- This will capture only the element not full page

    //Take screenshot of full page
    const screenshotBuffer = await page.screenshot({ fullPage: true });

    // Attach screenshot to HTML report
    await test.info().attach('Title in Screenshot', {
      body: screenshotBuffer,
      contentType: 'image/png',
    });

});

test('InValid Login Screenshot in Report',async({page})=>{
    
    const openCartLogin = new OpenCartLoginPage(page)
    await page.goto('https://www.saucedemo.com/');
    await openCartLogin.login(logintestdata.invalidUser.username,
                                logintestdata.invalidUser.password);
    
     // Capture error element
    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();

    // Take screenshot of the element -- only the element not full page 
    //const screenshotBuffer = await error.screenshot();

    //Take screenshot of full page
    const screenshotBuffer = await page.screenshot({ fullPage: true });

    // Attach screenshot to HTML report
    await test.info().attach('Error Message Screenshot', {
      body: screenshotBuffer,
      contentType: 'image/png',
    });

    // Optional: validate text
    await expect(error).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );

   });

});