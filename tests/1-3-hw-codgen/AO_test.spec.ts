import { test, expect } from '@playwright/test';

test('fill login page', async ({ page }) => {
  await page.goto('https://test.askod.online:60204/login?redirect=%2Fhome');
  
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('BorysPlaton.test@gmail.com');
  await expect(page.locator('input[name="email"]')).toHaveValue('BorysPlaton.test@gmail.com');
  
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12456789');
  await expect(page.locator('input[name="password"]')).toHaveValue('12456789');

  await page.locator('.v-input--selection-controls__ripple').click();
  await expect(page.getByRole('checkbox', { name: 'Remember me' })).toBeChecked();

});