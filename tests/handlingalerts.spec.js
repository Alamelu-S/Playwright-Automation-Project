import {test,expect} from '@playwright/test';
import { execPath } from 'process';

test('Simple Alert Test',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

    page.on('dialog',async dialog=>{
        console.log('Alert Msg',dialog.message());
        await dialog.accept();
    });

   await page.locator("button[onclick='showAlert()']").click();

});

test('Alert after 5 sec Test',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

    page.on('dialog',async dialog=>{
        console.log('Alert Msg::',dialog.message());
        await dialog.accept();
    })

    // await page.getByText('Click Me').first().click();

    await page.locator("button[onclick='myMessage()']").click();
})


test('Confirm Alert Test', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

    page.on('dialog', async dialog => {
        console.log('Confirm message:', dialog.message());
       // await dialog.dismiss(); // Cancel
        await dialog.accept(); //Ok
    });

    //await page.getByText('Click Me').nth(1).click();
    await page.locator("button[onclick='myDesk()']").click();
    const resultText = page.locator('#desk');
    await expect(resultText).toHaveText('You pressed OK!');
});

test('Prompt Alert Test', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

    page.on('dialog', async dialog => {
        console.log('Prompt message:', dialog.message());
        await dialog.accept('Alamelu');
    });

    //await page.getByText('Click Me').nth(2).click();

    await page.locator("button[onclick='myPromp()']").click();


});