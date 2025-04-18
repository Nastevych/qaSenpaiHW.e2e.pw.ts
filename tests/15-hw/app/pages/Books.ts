import { Locator, Page } from "@playwright/test";

export class Books {
  private page: Page;
  private bookListItemLocator: (title: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookListItemLocator = (title: string) =>
      this.page.locator(`//*[contains(@href, "/books?book")]`, {
        hasText: `${title}`,
      });
  }

  async goToBooksPage() {
    await this.page.goto("https://demoqa.com/books");
  }

  async openBookPageByTitle(title: string) {
    await this.bookListItemLocator(title).click();
  }

  async getOpeningBookLink() {
    await this.page.waitForResponse(
      (response) =>
        response.url() === `https://demoqa.com/books?book=**` &&
        response.request().method() === "GET"
    );
  }
}
