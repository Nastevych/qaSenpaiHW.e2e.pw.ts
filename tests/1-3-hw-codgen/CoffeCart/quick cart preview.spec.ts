import { test, expect } from '@playwright/test';

test('quick cart preview is visible', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').hover();
  
  await expect(page.getByRole('list').filter({ hasText: 'Espresso Macchiato x 1+-' })).toBeVisible();
});

test('add item to cart using quick cart preview', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await page.getByRole('button', { name: 'Add one Espresso Macchiato' }).click();
  
  await expect(page.getByRole('list').filter({ hasText: 'Espresso Macchiato x 2+-' })).toBeVisible();
});
test('remove item from cart using quick cart preview', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await page.getByRole('button', { name: 'Remove one Espresso Macchiato' }).click();
  
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});