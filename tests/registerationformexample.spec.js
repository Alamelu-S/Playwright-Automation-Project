import { test, expect } from '@playwright/test';

test('Registration Form Test', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await expect(page).toHaveTitle('Selenium Practice - Student Registration Form');
    await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')
    await page.locator('#name').fill('Alamelu');
    await page.locator('#email').fill('aaa@in.com');

    const radioGender = page.locator('#gender');

    if (!(await radioGender.isChecked())) {
        await radioGender.click();
        const labelTxGender = await page.locator('label:has-text("Female")').textContent();
        console.log('Selected Gender', labelTxGender?.trim());
    }

    await page.locator('#mobile').fill('2202202001');
    await page.locator('#subjects').fill('Maths');

    const chkboxHobbies = page.locator('input[type="checkbox"]').nth(2);
    if (!(await chkboxHobbies.isChecked())) {
        await chkboxHobbies.click();
        console.log('checkbox clicked');
    }

    //await page.getByLabel('Music').check();
    //console.log('Music checkbox clicked');


    await page.setInputFiles('#picture', 'C:/Users/alame/OneDrive/Desktop/Sample File to upload.txt');

    await page.locator('#state').selectOption({ label: 'NCR' });
    await page.locator('#city').selectOption({ label: 'Agra' });

    await page.locator('.btn.btn-primary').click();

});
