import {test,expect} from '@playwright/test';

test('Add WishList',async({page}) =>
{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    await expect(page).toHaveTitle('Account Login');
    
    await page.locator('#input-email').fill('automation2026@gmail.com');
    await page.locator('#input-password').fill('Smile@1617');
    await page.locator('input[value="Login"]').click();

    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    await expect(page).toHaveTitle('My Account');

    //To go to wish list 
    await page.locator('.list-group-item', { hasText: 'Wish List' }).click();
    await expect(page).toHaveTitle('My Wish List');

    //Count rows
    const rows = await page.locator('.table.table-bordered.table-hover tbody tr');
    const rowCount = await rows.count();
    console.log('Row Count:'+rowCount);

    //Display the Item Names from tables/wish list
    for(let i=0;i<rowCount;i++)
    {
        const itemName = await rows.nth(i).locator('td').nth(1).innerText();
        const price = await rows.nth(i).locator('td').nth(4).innerText();
        console.log('Item name in Wishlist:'+itemName+'||Price::'+price);
                   
    }    

});

//Remove Item from Wishlist
test('Remove Item from WishList',async({page}) =>
{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    await expect(page).toHaveTitle('Account Login');
    
    await page.locator('#input-email').fill('automation2026@gmail.com');
    await page.locator('#input-password').fill('Smile@1617');
    await page.locator('input[value="Login"]').click();

    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    await expect(page).toHaveTitle('My Account');

    //To go to wish list 
    await page.locator('.list-group-item', { hasText: 'Wish List' }).click();
    await expect(page).toHaveTitle('My Wish List');

    //Count rows
    const rows = await page.locator('.table.table-bordered.table-hover tbody tr');
    const rowCount = await rows.count();
    console.log('Row Count:'+rowCount);

    //Display the Item Names from tables/wish list
    for(let i=0;i<rowCount;i++)
    {
        const itemName = await rows.nth(i).locator('td').nth(1).innerText();
        const price = await rows.nth(i).locator('td').nth(4).innerText();
        console.log('Item name in Wishlist:'+itemName+'||Price::'+price);
        
        //To remove from wish lish
        if(itemName.includes('Canon EOS 5D') )
        {
            await rows.nth(i).locator('.btn.btn-danger').click();
            console.log('Removed item from wishlist');
            break;            
        }   
        await expect(page.locator('.alert.alert-success.alert-dismissible'))
        .toContainText('Success: You have modified your wish list!');
        //await expect(page.locator('.alert.alert-success.alert-dismissible').hasText('Success: You have modified your wish list!'));
           
    
    }    

});