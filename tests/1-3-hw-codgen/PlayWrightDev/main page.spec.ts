import { test, expect } from '@playwright/test';

test.describe('Main Page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });
  
  test('Main Page has Downloaded', async ({ page }) => {
    
    await expect(page.getByRole('banner')).toMatchAriaSnapshot(`
    - banner:
      - heading "Playwright enables reliable end-to-end testing for modern web apps." [level=1]
      - link "Get started"
      - link "Star microsoft/playwright on GitHub"
      - link /[\\d,.]+[bkmBKM]+\\+ stargazers on GitHub/
    `);
  
    await expect(page.getByRole('main')).toMatchAriaSnapshot(`
      - main:
        - img "Browsers (Chromium, Firefox, WebKit)"
      `);
    
    await expect(page.locator('h2')).toMatchAriaSnapshot(`
      - heading "Chosen by companies and open source projects" [level=2]
      `);
    
    await expect(page.getByText('Copyright © 2025 Microsoft')).toBeVisible();
  });
  
  test('Search window showed', async ({ page }) => {
    
    await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('test');
    
    await expect(page.getByRole('searchbox', { name: 'Search' })).toHaveValue('test');
    
    await expect(page.locator('body')).toMatchAriaSnapshot(`
    - banner:
      - text: Search
      - searchbox "Search": test
      - button "Clear the query":
      - img
    `);
    await expect(page.locator('#docsearch-hits0-item-0')).toContainText('Playwright enables reliable end-to-end testing for modern web …');
  });

  test('Go to Docs page', async ({ page }) => {
      
    await page.getByRole('link', { name: 'API' }).click();
    
    await expect(page).toHaveURL('https://playwright.dev/docs/api/class-playwright');
    await expect(page.getByRole('heading', { name: 'Playwright Library' })).toBeVisible();
  });

  test('Go to Get Started page', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();
    
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
    
  test('Node.js menu list items showed', async ({ page }) => {
    await page.getByRole('button', { name: 'Node.js' }).hover();
  
    await expect(page.getByLabel('Main', { exact: true }).getByRole('list')).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Node.js"
        - listitem:
          - link "Python"
        - listitem:
          - link "Java"
        - listitem:
          - link ".NET"
      `);
  });

  test('Go to Python page', async ({ page }) => {
    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
    
    await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright for Python');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Python');
  });

});