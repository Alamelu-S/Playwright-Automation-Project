// import {test,expect} from '@playwright/test';

// //Get single value from  static web table
// test('Static Web Table Test',async({page})=>{

//     await page.goto('https://testautomationpractice.blogspot.com/');

//      // Locate the iframe first
//     const frameLocator = page.frameLocator('iframe[src*="automationpractice"]');

//     // Wait for the table to be visible inside iframe
//     const table = frameLocator.locator('table');
//     await expect(table).toBeVisible({ timeout: 10000 }); // wait up to 10s

//     // Now get all rows
//     const rows = table.locator('tbody tr');
//     const rowCount = await rows.count();
//     console.log('Total rows in table:', rowCount);

//     for (let i = 0; i < rowCount; i++) {
//     const row = rows.nth(i);
//     const bookName = (await row.locator('td').nth(0).textContent())?.trim();

//     if (bookName === 'Master In Java') {
//       const bookPrice = (await row.locator('td').nth(3).textContent())?.trim(); // 4th column = index 3
//       console.log('Book Price:', bookPrice);

//       // Optional assertion
//       await expect(bookPrice).toBe('2000'); // replace with actual price
//       break; // stop loop once found
//     }
// }

// });