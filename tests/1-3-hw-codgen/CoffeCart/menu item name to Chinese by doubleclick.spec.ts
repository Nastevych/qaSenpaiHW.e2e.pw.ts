import { test, expect } from '@playwright/test';

test('Espresso to Chinese', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page.getByRole('heading', { name: 'Espresso $' }).dblclick();
  
  await expect(page.locator('#app')).toContainText('特浓咖啡');
});

test('Espresso Macchiato to Chinese', async ({ page }) => {
 await page.goto('https://coffee-cart.app/');
 
 await page.getByRole('heading', { name: 'Espresso Macchiato $' }).dblclick();
 
 await expect(page.locator('#app')).toContainText('浓缩玛奇朵');
});

test('Cappuccino to Chinese', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page.getByRole('heading', { name: 'Cappuccino $' }).dblclick();
  
  await expect(page.locator('#app')).toContainText('卡布奇诺');
 });






