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
    await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

});