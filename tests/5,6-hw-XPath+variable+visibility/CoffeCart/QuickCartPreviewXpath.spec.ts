import { test, expect, Page} from '@playwright/test';
//#region
function getCoffeeByName(page: Page, coffeeName: string){
    const coffeeItem = page.locator (`//*[@aria-label="${coffeeName}"]`);
    return coffeeItem;
};

function getCheckoutButton(page: Page){
    const CheckoutButton = page.locator (`//*[@data-test="checkout"]`);
    return CheckoutButton;
};

function getAddItemButton(page: Page, coffeeName: string){
    const AddItemButton = page.locator (`//button[@aria-label="Add one ${coffeeName}"]`);
    return AddItemButton;
};
//#endregion
const coffeeName = "Espresso Macchiato";

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
});

test('quick cart preview is visible', async ({ page}) => {
    const QuickCart = page.locator(`//*[@class="list-item"]`);

    await getCoffeeByName(page, coffeeName).click();
    await getCheckoutButton(page).hover();

    await expect(QuickCart).toBeVisible();
});

test('add item to cart using quick cart preview', async ({ page}) => {
    const coffeeItemCount = page.locator(`//span[@class="unit-desc"]`);

    await getCoffeeByName(page, coffeeName).click();
    await getCheckoutButton(page).hover();
    await getAddItemButton(page, coffeeName).click();

    await expect(coffeeItemCount).toContainText("2");
});