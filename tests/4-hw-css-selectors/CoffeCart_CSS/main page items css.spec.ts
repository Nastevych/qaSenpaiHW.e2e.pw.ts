import { test, expect } from '@playwright/test';

test('main page items visible', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "Menu page"
      - listitem:
        - link "Cart page"
      - listitem:
        - link "GitHub page"
    `); //!!! locator('ul') not found
  
    await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - heading /Espresso \\$\\d+\\.\\d+/ [level=4]
        - text: espresso
      - listitem:
        - heading /Espresso Macchiato \\$\\d+\\.\\d+/ [level=4]
        - text: espresso milk foam
      - listitem:
        - heading /Cappuccino \\$\\d+\\.\\d+/ [level=4]
        - text: espresso steamed milk milk foam
      - listitem:
        - heading /Mocha \\$\\d+\\.\\d+/ [level=4]
        - text: espresso chocolate syrup steamed milk whipped cream
      - listitem:
        - heading /Flat White \\$\\d+\\.\\d+/ [level=4]
        - text: espresso steamed milk
      - listitem:
        - heading /Americano \\$\\d+\\.\\d+/ [level=4]
        - text: espresso water
      - listitem:
        - heading /Cafe Latte \\$\\d+\\.\\d+/ [level=4]
        - text: espresso steamed milk milk foam
      - listitem:
        - heading /Espresso Con Panna \\$\\d+\\.\\d+/ [level=4]
        - text: espresso whipped cream
      - listitem:
        - heading /Cafe Breve \\$\\d+\\.\\d+/ [level=4]
        - text: espresso steamed milk steamed cream milk foam
    `);
    
    await expect(page.locator('[data-test="checkout"]')).toMatchAriaSnapshot(`
      - button "Proceed to checkout"
    `);
});