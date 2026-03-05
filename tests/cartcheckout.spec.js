import {test,expect} from '@playwright/test';
import { OpenCartLoginPage } from '../pages/OpenCartLoginPage';
import { ProductPage } from '../pages/ProductPage';
import logintestdata from '../test-data/logintestdata.json';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/CartPage';

test.describe('Checkout Process',()=>
{
    test('Full Purchase and Checkout Dynamic', async({page})=>{

    //Login 
    const loginPage = new OpenCartLoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(
        logintestdata.validUser.username,
        logintestdata.validUser.password
    );

    //Add Products Dynamically
    const productPage = new ProductPage(page);
    await productPage.addItemsDynamically(logintestdata.products);

    //Opencart
    await productPage.openCart();

    //Verify the Cart Item names and Count
    const cartPage = new CartPage(page);
    const itemCount  = await cartPage.getCartItemCount();
    console.log('Number of items in cart:', itemCount);

    const itemNames = await cartPage.getCartItemNames();
    console.log('Available Items:', itemNames);
    

    // Click checkout button to go to checkout page
    await cartPage.proceedToCheckout();
        
    //Checkout Process
    const checkout = new CheckoutPage(page);
    await checkout.enterCheckoutInfo(
        logintestdata.checkout.firstName,
        logintestdata.checkout.lastName,
        logintestdata.checkout.postalCode
    );
    //Finish Checkout
    await checkout.finishCheckout();

    //Verify Checkout Completion
    await checkout.verifyOrderComplete();

    })
})