import {test,expect} from '@playwright/test';

test('simple JS Test',async({page})=>{
    let name = 'Alamelu';
    console.log('Name',name);
})

test('SImple Addition Test', async({page})=>{
    function add(a,b) 
    {
        return a+b;
    }
    expect(add(2,3)).toBe(5);
})