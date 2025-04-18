import {test, expect, Page} from '@playwright/test';

function getCoffeeLabel(page: Page, itemNumber: number){
    const coffeeLabel = page
    .locator (`(//li/h4)[${itemNumber}]`);
    return coffeeLabel;
};

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
});

test ('Espresso to Chinese', async ({ page}) => {
    
    await getCoffeeLabel (page, 1).dblclick();

    await expect(getCoffeeLabel (page, 1)).toContainText('特浓咖啡');
});

test ('Espresso Macchiato to Chinese', async ({ page}) => {
    
    await getCoffeeLabel (page, 2).dblclick();

    await expect(getCoffeeLabel (page, 2)).toContainText('浓缩玛奇朵 ');
});