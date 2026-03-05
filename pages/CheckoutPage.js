import {expect} from '@playwright/test';

export class CheckoutPage
{
    constructor (page)
    {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName =  page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
        this.completeMsg = page.locator('.complete-header');
    }

    async enterCheckoutInfo(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueBtn.click();
    }

    async finishCheckout() {
        await this.finishBtn.click();
    }

    async verifyOrderComplete() {
        await expect(this.completeMsg).toHaveText('Thank you for your order!');
    }
}