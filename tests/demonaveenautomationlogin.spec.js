import {test,expect} from '@playwright/test';

test('Search Product',async({page}) =>
{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php');
  //await page.locator('.form-control.input-lg').fill('mac');
  //or
  await page.getByPlaceholder('Search').fill('mac');//search by mac
  await page.locator('.btn.btn-default.btn-lg').click();

  const searchItems = page.locator('.product-thumb');
  await expect(searchItems.first()).toBeVisible();

  const searchListCount = await searchItems.count();
  console.log('Search List Count:: ' + searchListCount);

  await expect(searchItems).not.toHaveCount(0);
});


test.skip('Login DemoTest',async({page}) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

   await expect(page).toHaveTitle('Account Login');
   await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.locator('#input-email').fill('automation2026@gmail.com');
    await page.locator('#input-password').fill('Smile@1617');
    await page.locator('input[value="Login"]').click();

    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    await expect(page).toHaveTitle('My Account');

    //To go to Desktops selection
  //  await page.getByText('Desktops').click();
    //or we can use the locator below
    await page.getByRole('link',{name:'Desktops', exact:true}).hover();

    await page.getByRole('link',{name:'Show All Desktops'}).click();

    //To get the count or no of items displayed in page:
    const products = page.locator('.product-thumb'); // try this if .product-layout is 0
    await expect(products.first()).toBeVisible();
    const itemCount = await products.count();
    console.log('No of Items displayed in page :: ' + itemCount);
    await expect(products).not.toHaveCount(0);
    
    //To display names of  product in the page
    for(let i=0;i<itemCount;i++)
    {
        const productName = await products.nth(i).locator('h4 a').innerText();
        console.log('Prodct Name ::'+productName)
       //Check if its specfic product name and then add it into cart
        if(productName.includes('MacBook Air'))
        {
          //await products.nth(i).locator('button').first().click();
          await products.nth(i).getByRole('button', { name: 'Add to Cart' }).click();
          console.log('Item added::');
          break;
          
        }
    }
    //After adding click shopping cart and its assertions
    await page.getByRole('link',{name:'Shopping Cart'}).click();
    
    await expect(page).toHaveURL(/route=checkout\/cart/);
    await expect(page).toHaveTitle('Shopping Cart');
    await expect(page.getByText('Your shopping cart is empty!')).toHaveCount(0);
    
    //await expect(page.getByRole('link', { name: 'MacBook Air' })).toBeVisible();
   const cartRow = page.locator('#content tbody tr', { hasText: 'MacBook Air' });
   await expect(cartRow).toBeVisible();

   /* const qty = cartRow.locator('input[name^="quantity"]');
    await expect(qty).toHaveValue('1');
    console.log('Quantity :: ' + await qty.inputValue());*/
    

});