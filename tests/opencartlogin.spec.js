import {test,expect} from '@playwright/test';
import { OpenCartLoginPage} from '../pages/OpenCartLoginPage';
import logintestdata from '../test-data/logintestdata.json';



test.describe('SauceDemo Login Tests', () => {

test('Valid Login Test',async({page})=>{
    
    const openCartLogin = new OpenCartLoginPage(page)
    await page.goto('https://www.saucedemo.com/');
    await openCartLogin.login(logintestdata.validUser.username,
                                logintestdata.validUser.password);
    
    // Verify user is on products page
    await expect(page.locator('.title')).toHaveText('Products');

});

test('InValid Login Test',async({page})=>{
    
    const openCartLogin = new OpenCartLoginPage(page)
    await page.goto('https://www.saucedemo.com/');
    await openCartLogin.login(logintestdata.invalidUser.username,
                                logintestdata.invalidUser.password);
    
     // Verify error message
    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();

    //Force to fail::
    // await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');
    //await expect(error).toHaveText('Invalid Login Error');

    // Take full page screenshot even if the test pass and capture error msg
    //await page.screenshot({ path: 'screenshots/full-page-invalid-login.png', fullPage: true });

    // Take screenshot of only the error element
    //await error.screenshot({ path: 'screenshots/error-message.png' });

    //Capture Dynamic Screenshot Name and Every run will generate unique screenshot file
    await error.screenshot({ path: `screenshots/error-${Date.now()}.png` });
});

});