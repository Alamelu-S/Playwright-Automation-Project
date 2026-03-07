import {test,expect} from '@playwright/test';
import fs from 'fs'; //

test.describe('File Upload and Download',()=>{

    test('File Upload Test',async({page})=>{

        await page.goto('https://www.tutorialspoint.com/selenium/practice/upload-download.php');

        //await page.locator('#uploadFile');

        // Upload a file
        await page.setInputFiles('#uploadFile',
             'C:/Users/alame/OneDrive/Desktop/Sample File to upload.txt');

        // Optional: Verify the file was uploaded
        const uploadedFile = await page.locator('#uploadFile').inputValue();
        console.log('Uploaded file:', uploadedFile);
        await page.screenshot({ path: 'screenshots/file-upload.png' });

        // If multiple files
        //await page.setInputFiles('input[type="file"]', ['file1.txt', 'file2.txt']);
    });


    test('File Download Test', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/upload-download.php');

    // Start download and save
    const [download] = await Promise.all([
        page.waitForEvent('download'),          // wait for download to start
        page.click('#downloadButton')           // trigger download
    ]);

    // Save to custom path (ensure folder exists)
    await download.saveAs('downloads/downloadedFile.png');

    // Optional: log path
    const filePath = await download.path();
    console.log('Downloaded file path:', filePath);

    // Optional: screenshot after download
    await page.screenshot({ path: 'screenshots/file-download.png' });

    //Attach page screenshot to Report
    /*await test.info().attach('Downloaded Screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png'
    });*/

    //Attach the downloadable file/img to report.
    const downloadedFilePath = 'downloads/downloadedFile.png';
    await test.info().attach('Downloaded Image', {
    body: await fs.promises.readFile(downloadedFilePath),
    contentType: 'image/png'
});

});
});