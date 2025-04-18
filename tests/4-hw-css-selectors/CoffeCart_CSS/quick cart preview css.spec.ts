import { test, expect } from '@playwright/test';

test('quick cart preview is visible', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('[data-test="Espresso_Macchiato"]')
  .click();
  
  await page
  .locator('[data-test="checkout"]')
  .hover();
  
  await expect(page
    .locator('.cart-preview'))//.getByRole('list').filter({ hasText: 'Espresso Macchiato x 1+-' }))
    .toBeVisible();
});

test('add item to cart using quick cart preview', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('[data-test="Espresso_Macchiato"]')
  .click();
  
  await page
  .locator('[data-test="checkout"]')
  .hover();
  
  await page
  .locator('[aria-label ="Add one Espresso Macchiato"]')//.getByRole('button', { name: 'Add one Espresso Macchiato' })
  .click();
  
  await expect(page
    .locator('.unit-desc'))//.getByRole('list').filter({ hasText: 'Espresso Macchiato x 2+-' })).toBeVisible();
    .toContainText("x 2");
});
test('remove item from cart using quick cart preview', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('[data-test="Espresso_Macchiato"]')
  .click();
  
  await page
  .locator('[data-test="checkout"]')
  .hover();
  
  await page
  .locator('[aria-label ="Remove one Espresso Macchiato"]')//.getByRole('button', { name: 'Remove one Espresso Macchiato' })
  .click();
  
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});