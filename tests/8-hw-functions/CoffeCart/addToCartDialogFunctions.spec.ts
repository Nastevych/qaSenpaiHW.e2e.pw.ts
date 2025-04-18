import { test, expect, Page } from '@playwright/test';

const coffeeName = "Espresso";
const tabName = "Cart page";

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
    const MainTabContent = page.locator(`//a[@aria-label="${tabName}"]`)
    return MainTabContent;
};

function getCartListItem(page: Page, coffeeName: string){
    const cartListItem = page.locator(`//li[@class = "list-header"]/following-sibling::li/div[text()="${coffeeName}"]`)
    return cartListItem;
};

function addToCartModalCall(page:Page, coffeeName: string){
    getCoffeeByName (page, coffeeName).click({button: 'right'});
};

function addToCartModal(page: Page){
    const addToCartModal = page.locator(`//dialog[@data-cy='add-to-cart-modal']`);
    return addToCartModal;
};

//#endregion

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    });

test ('028 add to cart dialog showed', async ({ page }) => {
    await addToCartModalCall(page, coffeeName);
    
    await expect (addToCartModal(page)).toBeVisible();
});

test ('029 add item using add to cart dialog', async ({ page }) => {
    await addToCartModalCall(page, coffeeName);

    await getAddToCartModalButton(page, "Yes").click();

    await getMainTabContent(page, tabName).click();

    await expect (getCartListItem(page, coffeeName)).toContainText(coffeeName);
    });

test ('030 refuse to add item using add to cart dialog', async ({ page }) => {
    await addToCartModalCall(page, coffeeName);

    await getAddToCartModalButton(page, "No").click();

    await expect(getMainTabContent(page, tabName)).toContainText('cart (0)');
    });