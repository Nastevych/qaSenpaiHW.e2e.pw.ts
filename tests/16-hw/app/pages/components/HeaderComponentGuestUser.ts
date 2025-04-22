import { Locator, Page } from "@playwright/test";

export class HeaderComponentGuestUser {
  protected page: Page;
  protected headerSignInPageButtonLocator: Locator;
  protected headerSignUpPageButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerSignInPageButtonLocator = page.locator('[href="/login"]');
    this.headerSignUpPageButtonLocator = page.locator('[href="/register"]');
  }

  async goToSignInPageUsingHeaderButton() {
    this.headerSignInPageButtonLocator.click();
  }

  async goToSignUpPageUsingHeaderButton() {
    this.headerSignUpPageButtonLocator.click();
  }
}
