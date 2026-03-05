export class OpenCartLoginPage
{
    constructor(page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }
        async login(user, pass) 
        {
            await this.page.fill('#user-name', user);
            await this.page.fill('#password', pass);
            await this.page.click('#login-button');
        }

    }
