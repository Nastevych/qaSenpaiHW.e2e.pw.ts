import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testname');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  
  await expect(
    page.getByRole('textbox', { name: 'Email' })
  ).toHaveValue('test@gmail.com');
  
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(
    page.getByRole('button', { name: 'Thanks for your purchase.' })
  ).toBeVisible();

});