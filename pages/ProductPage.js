export class ProductPage
{

   /*Hiding this hardcoded. since i am using dynamic / item values from testdata
    constructor (page)
    {
        this.page = page;
        this.addBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addSaucelabBolt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.addSaucelabBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        console.log(this.addBackpack); 
        this.cartIcon = page.locator('.shopping_cart_link');
    } */

    constructor(page) {
        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    // Add single or multiple items by name
    async addItemsDynamically(itemNames) 
    {
        // itemNames = array of product names e.g. ['Sauce Labs Backpack','Sauce Labs Bike Light']
        for (const name of itemNames) {
            const locator = this.page.locator('.inventory_item', { hasText: name }).locator('button');
            await locator.click();
        }

    }

    async addSingleItem()
    {
        //await this.page.waitForSelector('#add-to-cart-sauce-labs-backpack');
        await this.addBackpack.click();
    }

    async addMultipleItems()
    {
        await this.addBackpack.click();
        await this.addSaucelabBolt.click();
        await this.addSaucelabBikeLight.click();
    }
    async openCart()
    {
        await this.cartIcon.click();
    }
}