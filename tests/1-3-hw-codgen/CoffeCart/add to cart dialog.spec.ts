import { test, expect } from '@playwright/test';

test.describe('add to cart dialog', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://coffee-cart.app/');
  });


test('add to cart dialog showed', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click({
    button: 'right'
  });
  
  await expect(page.getByText('Add Espresso to the cart?YesNo')).toBeVisible();
});

test('add item using add to cart dialog', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  
  
  await expect(page.locator('#app')).toContainText('Espresso$10.00 x 1+-$10.00x');
});

test('refuse to add item using add to cart dialog', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'No' }).click();
  
  await expect(page.getByLabel('Cart page')).toContainText('cart (0)');
});

});
