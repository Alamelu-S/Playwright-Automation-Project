import {test, expect} from '@playwright/test';

test('Input Elements Test',async({page}) =>
{
    
    await page.goto('https://practice-automation.com/form-fields/');

    //Input - text
    await page.locator('#name-input').fill('Sai');
    await page.locator('input[type="password"]').fill('sai');
    //or
   // await page.getByLabel('Password ').fill('sai');

   //Checkbox::
   const favDrinks = await page.locator('input[type="checkbox"]').nth(2);
   if(!(await favDrinks.isChecked()))
   {
        await favDrinks.click();
        const drinkName = await favDrinks.getAttribute('value');
        console.log('Fav Drink checked:::'+drinkName);
   }

   //Radio
   const favColor =  await page.locator('input[type="radio"]').nth(2);
   if(!(await favColor.isChecked()))
   {
        await favColor.click();
        const colorName = await favColor.getAttribute('value');
        console.log('Fav Color is::::'+colorName);
   }

   //Dropdown
   //await page.getByLabel('Do you like automation?').selectOption({label : 'Yes'});
   //or
   //await page.locator('#automation').selectOption({value:'yes'});
   //or
   const drOption = await page.locator('#automation');
   await drOption.selectOption({label:'Yes'});
   await expect(drOption).toHaveValue('yes'); //HTML option value is yes.

   const selectedText = await drOption.locator('option:checked').innerText();

   console.log('Selected option: ' + selectedText);

   //Email
   await page.locator('#email').fill('ala@gmail.com');
   //Message
   await page.locator('#message').fill('Hi and Welcome to learning.');
   //Handling pop up /alert
   page.on('dialog',async dialog =>{
     console.log('Alert Msg::'+dialog.message());
     await dialog.accept();
   });
   //Submit
   await page.locator('#submit-btn').click();
   await expect(page).toHaveURL('https://practice-automation.com/form-fields/');
})