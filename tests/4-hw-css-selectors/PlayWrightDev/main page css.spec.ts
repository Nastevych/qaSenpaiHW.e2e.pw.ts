import { test, expect } from '@playwright/test';

test.describe('Main Page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });
  
  test('Main Page has Downloaded', async ({ page }) => {
    
    await expect(page
        .locator('header.hero'))//.getByRole('banner'))
        .toMatchAriaSnapshot(`
    - banner:
      - heading "Playwright enables reliable end-to-end testing for modern web apps." [level=1]
      - link "Get started"
      - link "Star microsoft/playwright on GitHub"
      - link /[\\d,.]+[bkmBKM]+\\+ stargazers on GitHub/
    `);
  
    await expect(page
        .locator('main'))//.getByRole('main'))
        .toMatchAriaSnapshot(`
      - main:
        - img "Browsers (Chromium, Firefox, WebKit)"
      `);
    
    await expect(page
        .locator('h2'))
        .toMatchAriaSnapshot(`
      - heading "Chosen by companies and open source projects" [level=2]
      `);
    
    await expect(page.getByText('Copyright © 2025 Microsoft')).toBeVisible();
    });
    
    test('Search success', async ({ page }) =>{ 
        
        await page
        .locator('.navbarSearchContainer_Bca1')//.getByRole('button', { name: 'Search (Ctrl+K)' })
        .click();
    
        await page
        .locator('#docsearch-input')//.getByRole('searchbox', { name: 'Search' })
        .fill('test');
    
        await expect(page
        .locator('#docsearch-hits0-item-0'))
        .toContainText('Playwright enables reliable end-to-end testing for modern web …');
    });

  test('Go to API page', async ({ page }) => {
      
    await page
    .locator('#__docusaurus > nav > .navbar__inner > .navbar__items:first-child > a:nth-child(4)')//.getByRole('link', { name: 'API' })
    .click();
    
    await expect(page)
    .toHaveURL('https://playwright.dev/docs/api/class-playwright');
   
  });

 
    
  test('Node.js menu list items showed', async ({ page }) => {
    await page
    .locator('#__docusaurus > nav > .navbar__inner > .navbar__items:first-child > .navbar__item:nth-child(5) > .navbar__link')//.getByRole('button', { name: 'Node.js' })
    .hover();

    await expect(page
        .locator('.dropdown__menu'))//.getByText('Node.jsPythonJava.NET'))
        .toBeVisible();
  
  });

  test('Go to Python page', async ({ page }) => {
    await page
    .locator('#__docusaurus > nav > .navbar__inner > .navbar__items:first-child > .navbar__item:nth-child(5) > .navbar__link')//.getByRole('button', { name: 'Node.js' })
    .hover();
    
    await page
    .locator('.dropdown__menu') //.locator('.dropdown__menu > li:nth-child(2)')//.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' })
    .getByText("Python")
    .click();
    
    await expect(page)
    .toHaveURL('https://playwright.dev/python/');
  });

});