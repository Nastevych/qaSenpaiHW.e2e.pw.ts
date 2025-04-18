import { test, expect, Page } from '@playwright/test';
//#region
function getNavBarItem(page: Page, itemName: string){
    const NavBarItem = page
    .locator (`//*[contains(@class,"navbar") and text() = "${itemName}"]`);
    return NavBarItem;
};


function getNavBarDropDownItem(page: Page, DropDownItemName: string){
    const NavBarDropDownItem = page
    .locator(`//*[@class="dropdown__link" and text() = "${DropDownItemName}"]`);
    return NavBarDropDownItem;
};
//#endregion
    
test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('Search modal opens', async ({ page }) => {
    //#region
    const searchButton = page.locator('//*[@class="DocSearch-Modal"]');
    const docSearchModal =  page.locator('//*[@class="DocSearch-Modal"]');
    //#endregion

    await searchButton.click();

    await expect(docSearchModal).toBeVisible();
    });

test('Go to API page', async ({ page }) => {
      
    await getNavBarItem(page, "API").click();
    
    await expect(page).toHaveURL('https://playwright.dev/docs/api/class-playwright');
    });

test('Go to Get Started page', async ({ page }) => {
    const getStartedButton = page.locator('//*[@class="getStarted_Sjon"]');
    
    await getStartedButton.click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
    });

test('Node.js dropdown menu showed', async ({ page }) => {
    const dropdownMenu = page.locator('//*[@class="dropdown__menu"]');
    
    await getNavBarItem(page, "Node.js").hover();
    
    await expect(dropdownMenu).toBeVisible();
    });

test('Go to Python page', async ({ page }) => {
        
    await getNavBarItem(page, "Node.js").hover();
    await getNavBarDropDownItem(page, "Python").click();
        
    await expect(page).toHaveURL('https://playwright.dev/python/');
    });