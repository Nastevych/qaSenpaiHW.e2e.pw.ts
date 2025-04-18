import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  globalFeedArticlesLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.globalFeedArticlesLocator = page.locator(
      '//h1[@data-qa-type="preview-title"]'
    );
  }

  async getGlobalFeedFirstArticleTitle() {
    const globalFeedFirstArticle = await this.globalFeedArticlesLocator
      .first()
      .textContent();

    return globalFeedFirstArticle;
  }
}
