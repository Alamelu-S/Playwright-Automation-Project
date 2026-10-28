//@ts-check
//import { test,expect } from "@playwright/test";

/*test('Open Link',async({page}) =>
{
    await page.goto('https://www.google.com')
});*/



import {test,expect } from "@playwright/test";

test('Launch Broswer', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const title = await page.title();
    console.log('Title :: '+title);

    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

   // await expect(page).toHaveTitle('OrangeHRM');
   
    });
