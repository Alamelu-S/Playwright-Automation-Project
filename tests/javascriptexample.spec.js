import {test,expect} from '@playwright/test';

test('simple JS Test',async({page})=>{
    let name = 'Alamelu';
    console.log('Name',name);
})