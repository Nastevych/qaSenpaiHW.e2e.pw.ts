import { Locator, Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected headerLogoHomePageNavButtonLocator: Locator;
  protected headerHomeNavButtonLocator: Locator;
  protected headerNewArticleButtonLocator: Locator;
  protected headerSettingsButtonLocator: Locator;
  protected headerUserPageNavButton: Locator;
  protected headerSignInPageButtonLocator: Locator;
  protected headerSignUpPageButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerLogoHomePageNavButtonLocator = page
      .getByRole("link", { name: "conduit" })
      .first();
    this.headerHomeNavButtonLocator = page.getByRole("link", { name: "Home" });
    this.headerNewArticleButtonLocator = page.getByRole("link", {
      name: "New Article",
    });
    this.headerSettingsButtonLocator = page.getByRole("link", {
      name: "Settings",
    });
    this.headerUserPageNavButton = page.locator(
      '//*[@class="nav-item"]/*[contains(@href, "/@")]'
    );
    this.headerSignInPageButtonLocator = page.locator('[href="/login"]');
    this.headerSignUpPageButtonLocator = page.locator('[href="/register"]');
  }

  async goToHomePage() {
    await this.page.goto("");
  }

  async goToMainPageUsingHeaderLogoButton() {
    await this.headerLogoHomePageNavButtonLocator.click();
  }

  async goToMainPageUsingHeaderHomeButton() {
    await this.headerHomeNavButtonLocator.click();
  }

  async goToCreateNewArticlePageUsingHeaderButton() {
    await this.headerNewArticleButtonLocator.click();
  }

  async goToSettingsPageUsingHeaderButton() {
    this.headerSettingsButtonLocator.click();
  }

  async goToUserPageUsingHeaderButton() {
    this.headerUserPageNavButton.click();
  }

  async goToSignInPageUsingHeaderButton() {
    this.headerSignInPageButtonLocator.click();
  }

  async goToSignUpPageUsingHeaderButton() {
    this.headerSignUpPageButtonLocator.click();
  }
}
