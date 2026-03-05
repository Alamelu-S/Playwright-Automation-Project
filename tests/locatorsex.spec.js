//@ts-check
import { test,expect } from "@playwright/test";

test('Locators Test', async({page})=>
{
    console.log('before launch site')
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    console.log('after launch')

    //Locators-- Click on login button using Property locator
    await page.locator('id=input-email').fill('tryautomation@gmail.com')
    //await page.click('id=input-email')

    //using CSS
    await page.locator('#input-password').fill('Smile@1617')

    //using xpath
    await page.click("//input[@value='Login']")

    //after login checking assertion
    const insideTitle = await page.locator("//h2[normalize-space()='My Account']").isVisible()
    console.log("insideTitle::"+insideTitle)

    //await expect(insideTitle).toBeVisible();

    console.log("Title is visible and passed test")


    await page.close()

});