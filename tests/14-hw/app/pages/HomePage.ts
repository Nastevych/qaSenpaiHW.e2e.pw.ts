import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private globalFeedArticleTitle: any;
  constructor(page: Page) {
    super(page);
    this.globalFeedArticleTitle = page.locator(
      '//h1[@data-qa-type="preview-title"]'
    );
  }

  async getGlobalFeedFirstArticleTitle() {
    const globalFeedFirstArticle = await this.globalFeedArticleTitle
      .first()
      .textContent();
    return globalFeedFirstArticle;
  }
}
