import {test,expect} from '@playwright/test';

test('Example', async ({ browser }) => {

  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto('https://example.com');

});