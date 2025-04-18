import { test, expect } from '@playwright/test';

test('Espresso to Chinese', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('li:nth-child(1) h4') //getByRole('heading', { name: 'Espresso $' })
  .dblclick (); 
  
  await expect(page.locator('li:nth-child(1) h4')).toContainText('特浓咖啡'); //locator('#app'))
});

test('Espresso Macchiato to Chinese', async ({ page }) => {
 await page.goto('https://coffee-cart.app/');
 
 await page
 .locator('li:nth-child(2) h4') //.getByRole('heading', { name: 'Espresso Macchiato $' })
 .dblclick();
 
 await expect(page.locator('li:nth-child(2) h4')).toContainText('浓缩玛奇朵'); //locator('#app'))
});

test('Cappuccino to Chinese', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await page
  .locator('li:nth-child(3) h4')//.getByRole('heading', { name: 'Cappuccino $' })
  .dblclick();
  
  await expect(page.locator('li:nth-child(3) h4')).toContainText('卡布奇诺'); //locator('#app'))

});




