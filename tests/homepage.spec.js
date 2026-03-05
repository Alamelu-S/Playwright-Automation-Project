//@ts-check
import { test,expect } from "@playwright/test";

test('Home Page',async({page}) =>
{
    console.log('Browser befor launch')
    await page.goto('https://demoblaze.com/index.html')
    console.log('After launch')

    const homePageTitle = await page.title();
    console.log('HomePage Title::'+homePageTitle)

    await expect(page).toHaveTitle('STORE')

    const HomepageURL = await page.url();
    console.log('Homepage URL::'+HomepageURL)

    await expect(page).toHaveURL('https://demoblaze.com/index.html')

    await page.close();

    console.log('Test Completed')
});