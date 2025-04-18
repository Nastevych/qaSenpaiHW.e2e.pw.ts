import { test, expect, Page} from '@playwright/test';

const coffeeName = "Espresso Macchiato";
const tabName = "Cart page";

//#region

const getCoffeeByName = (page: Page, coffeeName: string) => page.locator (`//*[@aria-label="${coffeeName}"]`);

const getCheckoutButton = (page: Page) => page.locator (`//*[@data-test="checkout"]`);

function getAddItemButton(page: Page, coffeeName: string){
    const AddItemButton = page.locator (`//button[@aria-label="Add one ${coffeeName}"]`);
    return AddItemButton;
};

function getRemoveItemButton(page: Page, coffeeName: string){
    const AddItemButton = page.locator (`//button[@aria-label="Remove one ${coffeeName}"]`);
    return AddItemButton;
};

function quickCart (page: Page){
    const QuickCart = page.locator(`//*[@class="list-item"]`);
    return QuickCart;
};

function coffeeItemCount (page: Page, coffeeName: string){
    const coffeeItemCount = page.locator(`//span[text() = "${coffeeName}"]/following-sibling::span[@class = "unit-desc"]`);
    return coffeeItemCount;
};

function addCoffeeToCart(page: Page, coffeeName){
    getCoffeeByName(page, coffeeName).click();
};

function getMainTabContent(page: Page, tabName: string){
    const MainTabContent = page.locator(`//a[@aria-label="${tabName}"]`)
    return MainTabContent;
};

//#endregion


test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
});

test('033 quick cart preview is visible', async ({ page}) => {
    
    await addCoffeeToCart (page, coffeeName);
    await getCheckoutButton(page).hover();

    await expect(quickCart(page)).toBeVisible();
});

test('034 add item to cart using quick cart preview', async ({ page}) => {

    await addCoffeeToCart (page, coffeeName);
    await getCheckoutButton(page).hover();
    
    await getAddItemButton(page, coffeeName).click();

    await expect(coffeeItemCount(page, coffeeName)).toContainText("2");
});

test('035 remove to cart using quick cart preview', async ({ page}) => {

    await addCoffeeToCart (page, coffeeName);
    await getCheckoutButton(page).hover();
    
    await getRemoveItemButton(page, coffeeName).click();

    await expect(getMainTabContent(page, tabName)).toContainText('cart (0)');
});