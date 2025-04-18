import { Page } from "@playwright/test";

export class Book {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async getBookPageURL() {
    const bookPageURL = await this.page.url();
    return bookPageURL;
  }
}
