import {test,expect} from '@playwright/test';
import { request } from 'http';

test.describe('API Test',()=>
{
    test('GET API Test',async({request})=>
    {
        const  response = await request.get('https://fakestoreapi.com/products/1');

        expect(response.status()).toBe(200);
        console.log(response.status())
        const body = await response.json();
        console.log(body);
    })

    test('POST API Test',async({request})=>
    {
        const response = await request.post('https://fakestoreapi.com/products',
            {
                "title": "My Test Product",
                "price": 99.99,
                "description": "Automation test product",
                "image": "https://i.pravatar.cc",
                "category": "electronics"
            });
        expect(response.status()).toBe(201);
        const jsonOutput = await response.json();
        console.log(jsonOutput); 
       // expect(jsonOutput.category).toBe("electronics"); 
    })

    test('PUT API Test',async({request})=>
    {
        const response = await request.put('https://fakestoreapi.com/products/1',
        {
            "id": 1,
            "title": "Updated Shirt",
            "price": 999,
            "description": "Updated via API automation",
            "category": "men's clothing",
            "image": "https://i.pravatar.cc"

        });

        expect(response.status()).toBe(200);
        const outputData = await response.json();
        console.log(outputData);

    })



    //page.request -- to call API
    test('API call inside UI test', async ({ page }) => {

    const response = await page.request.get('https://fakestoreapi.com/products/1');

    const data = await response.json();
    console.log(data);
});
})