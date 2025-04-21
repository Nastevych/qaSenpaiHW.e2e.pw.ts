import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
  private editArticleButtonLocator: Locator;
  private deleteArticleButtonLocator: Locator;
  private articleHeaderTitleLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.editArticleButtonLocator = page.locator(
      '//*[@class = "article-actions"]//*[contains(@href, "editor")]'
    );
    this.deleteArticleButtonLocator = page.locator(
      '//*[@class = "banner"]//button[@data-qa-id="article-delete"]'
    );
    this.articleHeaderTitleLocator = page.locator(
      `[data-qa-id="article-title"]`
    );
  }

  async getArticleHeaderTitle() {
    const articleHeaderTitle =
      await this.articleHeaderTitleLocator.textContent();
    return articleHeaderTitle;
  }

  async goToEditArticleByBannerEditArticleButton() {
    await this.editArticleButtonLocator.click();
  }

  async deleteArticleByBannerDeleteArticleButton() {
    await this.deleteArticleButtonLocator.click();
  }
}
