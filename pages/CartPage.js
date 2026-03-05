export class CartPage{

    constructor (page)
    {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutBtn = page.locator('#checkout');
    }

    async getCartItemCount()
    {
        return await this.cartItems.count();
    }

    async getCartItemNames()
    {
        return await this.cartItems.locator('.inventory_item_name').allTextContents();
    }

    async proceedToCheckout() {
        await this.checkoutBtn.click();
    }
}