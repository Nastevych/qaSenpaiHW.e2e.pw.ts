import { Locator, Page } from "@playwright/test";

export class HeaderComponentAuthorizedUser {
  protected page: Page;
  protected headerNewArticleButtonLocator: Locator;
  protected headerSettingsButtonLocator: Locator;
  protected headerUserPageNavButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerNewArticleButtonLocator = page.getByRole("link", {
      name: "New Article",
    });
    this.headerSettingsButtonLocator = page.getByRole("link", {
      name: "Settings",
    });
    this.headerUserPageNavButton = page.locator(
      '//*[@class="nav-item"]/*[contains(@href, "/@")]'
    );
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
}
