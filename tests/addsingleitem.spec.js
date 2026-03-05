import {test,expect} from '@playwright/test';
import { OpenCartLoginPage } from '../pages/OpenCartLoginPage';
import { ProductPage } from '../pages/ProductPage';
import logintestdata from '../test-data/logintestdata.json';

test.describe('Add Single Item',()=>{

    test('Add Single Product',async({page})=>
    {

    const openCartLogin = new OpenCartLoginPage(page)
    await page.goto('https://www.saucedemo.com/');
    await openCartLogin.login(logintestdata.validUser.username,
                                logintestdata.validUser.password);

    const prodcutPage = new ProductPage(page)
    await prodcutPage.addSingleItem();
    await prodcutPage.openCart();
    await expect(page.locator('.cart_item')).toBeVisible();
    console.log('item is visible');

    });
    });
