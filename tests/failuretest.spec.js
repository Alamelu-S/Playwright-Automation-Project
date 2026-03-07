import { test, expect } from '@playwright/test';

test('Failure screenshot demo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // Intentionally wrong title to fail the test
  await expect(page).toHaveTitle('Wrong Title');

});