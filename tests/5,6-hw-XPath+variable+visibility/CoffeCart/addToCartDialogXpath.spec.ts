import { test, expect, Page } from '@playwright/test';
//#region
function getCoffeeByName(page: Page, coffeeName: string){
    const coffeeItem = page.locator (`//*[@data-test="${coffeeName}"]`);
    return coffeeItem;
};

function getAddToCartModalButton(page: Page, buttonName: string){
    const AddToCartModalButton = page.locator(`//dialog/form/button[contains(text(),"${buttonName}")]`)
    return AddToCartModalButton;
};

function getMainTabContent(page: Page, tabName: string){
    const MainTabContent = page.locator(`//a[@aria-label="Cart page"]`)
    return MainTabContent;
};

function getCartListItem(page: Page, coffeeName: string){
    const cartListItem = page.locator(`//li[@class = "list-header"]/following-sibling::li/div[text()="${coffeeName}"]`)
    return cartListItem;
};
//#endregion
const coffeeName = "Espresso";
const tabName = "Cart page";
const addToCartModal = `//dialog[@data-cy='add-to-cart-modal']`;


test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    });

test ('add to cart dialog showed', async ({ page }) => {
    await getCoffeeByName (page, coffeeName).click({button: 'right'});

    await expect (page.locator (addToCartModal)).toBeVisible();
    });

test ('add item using add to cart dialog', async ({ page }) => {
    await getCoffeeByName(page, coffeeName).click({button: 'right'});

    await getAddToCartModalButton(page, "Yes").click();

    await getMainTabContent(page, tabName).click();

    await expect (getCartListItem(page, coffeeName)).toContainText(coffeeName);
    });

test ('refuse to add item using add to cart dialog', async ({ page }) => {
    await getCoffeeByName (page, coffeeName).click({button: 'right'});

    await getAddToCartModalButton(page, "No").click();

    await expect(getMainTabContent(page, tabName)).toContainText('cart (0)');
    });