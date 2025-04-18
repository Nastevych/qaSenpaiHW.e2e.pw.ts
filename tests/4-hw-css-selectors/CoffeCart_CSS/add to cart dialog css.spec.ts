import { test, expect } from '@playwright/test';

test.describe('add to cart dialog', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://coffee-cart.app/');
  });


test('add to cart dialog showed', async ({ page }) => {
  await page
  .locator('[data-test="Espresso"]')
  .click({
    button: 'right'
  });
  
  await expect(page 
    .locator('[data-cy = "add-to-cart-modal"]')) //getByText('Add Espresso to the cart?YesNo'
    .toBeVisible(); 
});

test('add item using add to cart dialog', async ({ page }) => {
  await page
  .locator('[data-test="Espresso"]')
  .click({
    button: 'right'
  });
  
  await page
  .locator('dialog button') //getByRole('button', { name: 'Yes' })
  .getByText("Yes").click(); 
  
  await page
  .locator('[aria-label = "Cart page"]') //getByRole('link', { name: 'Cart page' })
  .click(); 
  
  await expect(page
    .locator('[ul:not(.cart-preview) li.list-item > div:first-child]')) // !У Браузері шукає по локатору, а PW не проходить тест
    .toContainText('Espresso');//locator('#app')).toContainText('Espresso$10.00 x 1+-$10.00x')
});

test('refuse to add item using add to cart dialog', async ({ page }) => {
  await page
  .locator('[data-test="Espresso"]')
  .click({
    button: 'right'
  });
  
  await page
  .locator('dialog button') //.getByRole('button', { name: 'No' })
  .getByText("No")
  .click(); 
  
  await expect(page
    .locator('[aria-label = "Cart page"]')) //.getByLabel('Cart page')
    .toContainText('cart (0)'); 

  await expect(page
    .locator('[data-test = "checkout"]')) //getByRole
    .toContainText('Total: $0.00'); 
});

});
