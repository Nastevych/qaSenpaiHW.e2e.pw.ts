import { test, expect } from '@playwright/test';

test('submit order from main page', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  
  await page.getByRole('textbox', { name: 'Name' }).fill('Bob');
  await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('Bob');
  
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('bob@mail.com');
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('bob@mail.com');
  
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByRole('button', { name: 'Thanks for your purchase.' })).toBeVisible();
});

test('submit order from cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page.locator('[data-test="Espresso"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await page.locator('[data-test="checkout"]').click();
  
  await page.getByRole('textbox', { name: 'Name' }).fill('Bob');
  
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('bob@mail.com');
  
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await expect(page.getByRole('checkbox', { name: 'Promotion checkbox' })).toBeChecked();
  
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page).toHaveURL('https://coffee-cart.app/');
  await expect(page.getByLabel('Cart page')).toContainText('cart (0)');
  await expect(page.getByRole('button', { name: 'Thanks for your purchase.' })).toBeVisible();
});


// test('can`t submit order without items', async ({ page }) => {
//   await page.goto('https://coffee-cart.app/');
//   await page.locator('[data-test="checkout"]').click();
  
//   await expect(page.getByRole('button', { name: 'Your cart is empty. Please select something from the menu.' })).toBeVisible();
// });
