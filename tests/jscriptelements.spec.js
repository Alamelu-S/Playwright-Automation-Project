import {test,expect} from '@playwright/test';

//TextBox
test('Textbox Element Test',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    await page.locator('#fullname').fill('Alamelu Siva');
    await page.locator('#email').fill('asiva@gmail.com');
    await page.locator('#address').fill('23 ss street lisle');
    await page.locator('#password').fill('sss');

    await page.locator("input[value='Submit']").click();

    const title = await page.title();
    expect(title).toBe('Selenium Practice - Text Box');
    console.log('Title::',title);

    //OR
   // await expect(page).toHaveTitle('Selenium Practice - Text Box');

});

//Button element:
test('Button element Test',async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/buttons.php');

    await page.locator('.btn.btn-primary').click();
    const textLabel =  await page.locator('#welcomeDiv').textContent();
    console.log('Text Label::',textLabel?.trim());
    await expect(textLabel?.trim()).toBe('You have done a dynamic click');
})

//Web table or get the specfic value from table
test('Get the value from table test', async ({ page }) => {

    await page.goto('https://practice-automation.com/tables/');

    // 1️⃣ Get Laptop price directly
    const laptopRow = page.locator('tr', { hasText: 'Laptop' });
    const laptopPrice = await laptopRow.locator('td').nth(1).textContent();
    console.log('Laptop price is:', laptopPrice?.trim());

    // 2️⃣ Loop through all rows
    const rows = page.locator('tr:has(td)');
    const rowCount = await rows.count(); // should now match actual visible rows
    console.log('Row Count:', rowCount); // likely 3

    for (let i = 0; i < rowCount; i++) {
    const rowCells = await rows.nth(i).locator('td').allTextContents();
    console.log(rowCells[0].trim(), rowCells[1].trim());
    }
});

//Checkbox 
test('Checkbox Test', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');

    const chkBox = page.locator('#c_bs_1');

    // Optionally check if it is already checked
    if(!(await chkBox.isChecked()))
    {
        await chkBox.click();
        console.log('chkbox clicked')
    }
    // Assert checkbox is checked (or check it first)
    await expect(chkBox).toBeChecked();

});

//Radio Button 
test('RadoBtn Test Yes',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');

    const radioBtnYes = page.locator("input[value='igottwo']");
    let labelText = '';

    if(!(await radioBtnYes.isChecked()))
    {
        await radioBtnYes.click();
        labelText = await page.locator('#check').textContent();
        console.log('You Selected::',labelText?.trim());
    }
    //Assertion
    await expect(radioBtnYes).toBeChecked();

    });

test('RadoBtn Test Impressive',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');

    const radoBtnImpressive = page.locator("input[value='igotthree']");
    let labelText = '';

    if(!(await radoBtnImpressive.isChecked()))
    {
        await radoBtnImpressive.click();
        labelText = await page.locator("div[id='check1'] b").textContent();
        console.log('You Selected::',labelText?.trim());
    }
    //Assertion
    await expect(radoBtnImpressive).toBeChecked();

});

//Get list of links from webpage:
test('Get List of Links Test',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/links.php');

    const links = page.locator('.text-left a');
    const linksCount = await links.count();
    console.log('Links Count:',linksCount);

    for(let i=0;i < linksCount;i++)
    {
        const linkInside = links.nth(i);
        if(await linkInside.isVisible())
        {
            console.log((await linkInside.textContent())?.trim());
        } 
    }
});

//Dropdown 
test('Dropdown Test',async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/select-menu.php');

    const dropDownLocator = page.locator('#inputGroupSelect03');

    //select by label / visible text
    await dropDownLocator.selectOption({ label: 'Mr.' });
    
    // Get selected value (value attribute)
    const selectedValue = await dropDownLocator.inputValue();
    console.log('Selected Value (attribute):', selectedValue); 

    // Get visible text of selected option
    const selectedText = await dropDownLocator.locator('option:checked').textContent();
    console.log('Selected Text:', selectedText?.trim()); // prints "Mr."

    // Assertions
    expect(selectedValue).toBe('2');           // correct for value attribute
    expect(selectedText?.trim()).toBe('Mr.');  // correct for visible text
});

test('Navigate back and forward', async ({ page }) => {

  await page.goto('https://example.com');
  await page.goto('https://google.com');

  //expect(page).toHaveTitle('New Tab');

  await page.goBack();     // goes back to example.com
  await page.goForward();  // goes forward to google.com

});

//Multidropdown is not working for the below site used.
/*test('Multidropdwon Test',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/select-menu.php');

    const multiDropdown = page.locator('#demo-multiple-select-input');

    await multiDropdown.click();

    await page.getByText('Books').click();
    await page.getByText('Health & Beauty').click();
    await page.getByText('Toys, Kids & Baby').click(); 

    //const multiDropDownLocator = page.locator('#demo-multiple-select');

    //await expect(multiDropDownLocator).toBeVisible();
     
    //select by value
   // await multiDropDownLocator.selectOption(['2','3']);

   
    //select by multiple label /text
   /* await multiDropDownLocator.selectOption([{label:'Books'},{label:'Health & Beauty'},
        {label:'Toys, Kids & Baby'}]);

    const selected = await multiDropDownLocator
    .locator('option:checked')
    .allTextContents();

    console.log(selected);
}) */

