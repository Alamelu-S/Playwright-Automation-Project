import {test,expect} from '@playwright/test';
import { OpenCartLoginPage } from '../pages/OpenCartLoginPage';
import { ProductPage } from '../pages/ProductPage';
import logintestdata from '../test-data/logintestdata.json';

test.describe('Add Multiple Items',()=>
{

    test.skip('Adding Multiple Items Into Cart',async({page})=>{

    const openCartLogin = new OpenCartLoginPage(page)
    await page.goto('https://www.saucedemo.com/');
    await openCartLogin.login(logintestdata.validUser.username,
                                logintestdata.validUser.password);

    const prodcutPage = new ProductPage(page);
    await prodcutPage.addMultipleItems();
    await prodcutPage.openCart();
    await expect(page.locator('.cart_list')).toBeVisible();
    console.log('list is visible'); 
    
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(3);
    console.log('Number of items in cart:', await cartItems.count());

    })

    //This method for adding items from testdata..
    test('Add multiple items dynamically', async ({ page }) => 
    {
    const loginPage = new OpenCartLoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(
        logintestdata.validUser.username,
        logintestdata.validUser.password
    );

    const productPage = new ProductPage(page);
    await productPage.addItemsDynamically(logintestdata.products);
    await productPage.openCart();

    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(logintestdata.products.length);
    console.log('Number of items in cart:', await cartItems.count());

    // Get names of all items
    const itemNames = await cartItems.locator('.inventory_item_name').allTextContents();
    console.log('Available Items:', itemNames);
    
    });
})

