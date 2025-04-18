import {test, expect} from '@playwright/test'

test('033 order all existing coffees', async({page}) =>{
    await page.goto(`https://coffee-cart.app/`);

    const count = await page.locator(`.cup-body`).count();

    for(let i = 0; i < count; i++){
        await page.locator(`//*[@class = "cup-body"]`).nth(i).click();
    };

    await expect(page.locator(`//a[@aria-label="Cart page"]`)).toContainText(`cart (${count})`);
});