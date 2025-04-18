import { test, expect } from '@playwright/test';

test('submit order from main page', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('[data-test="Espresso"]')
  .click();
  
  await page
  .locator('[data-test="checkout"]')
  .click();
  
  await page
  .locator('#name')//.getByRole('textbox', { name: 'Name' })
  .fill('Bob');
  
  await page
  .locator('#email')//.getByRole('textbox', { name: 'Email' })
  .click();
  
  await page
  .locator('#email')//.getByRole('textbox', { name: 'Email' })
  .fill('bob@mail.com');
  
  await page
  .locator('#submit-payment')//.getByRole('button', { name: 'Submit' })
  .click();
  
  await expect(page
    .locator('.snackbar'))//.getByRole('button', { name: 'Thanks for your purchase.' })) 
    // !class="snackbar success"
    .toBeVisible();
});

test('submit order from cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('[data-test="Espresso"]')
  .click();
  
  await page
  .locator('[aria-label = "Cart page"]')//.getByRole('link', { name: 'Cart page' })
  .click();
  
  await page
  .locator('[data-test="checkout"]')
  .click();
  
  await page
  .locator('#name')//.getByRole('textbox', { name: 'Name' })
  .fill('Bob');
  
  await page
  .locator('#email')//.getByRole('textbox', { name: 'Email' })
  .click();
  
  await page
  .locator('#email')//.getByRole('textbox', { name: 'Email' })
  .fill('bob@mail.com');
  
  await page
  .locator('#promotion')//.getByRole('checkbox', { name: 'Promotion checkbox' })
  .check();
  
  await expect(page
  .locator('#promotion'))//.getByRole('checkbox', { name: 'Promotion checkbox' }))
    .toBeChecked();
  
  await page
  .locator('#submit-payment')//.getByRole('button', { name: 'Submit' })
  .click();

  
    await expect(page)
    .toHaveURL('https://coffee-cart.app/');
  
    await expect(page
    .locator('[aria-label="Cart page"]'))//.getByLabel('Cart page'))
    .toContainText('cart (0)');
  
    await expect(page
    .locator('.snackbar'))//.getByRole('button', { name: 'Thanks for your purchase.' }))
    .toBeVisible();
});
