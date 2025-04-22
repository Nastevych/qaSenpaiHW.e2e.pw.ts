import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
  private editArticleButtonLocator: Locator;
  private deleteArticleButtonLocator: Locator;
  articleHeaderTitleLocator: (title: string) => Locator;

  constructor(page: Page) {
    super(page);
    this.editArticleButtonLocator = page.locator(
      '//*[@class = "article-actions"]//*[contains(@href, "editor")]'
    );
    this.deleteArticleButtonLocator = page.locator(
      '//*[@class = "banner"]//button[@data-qa-id="article-delete"]'
    );
    this.articleHeaderTitleLocator = (title: string) =>
      this.page.getByRole("heading", {
        name: title,
      });
  }

  async getArticleHeaderTitle(title: string) {
    const articleHeaderTitle =
      await this.articleHeaderTitleLocator(title).textContent();
    return articleHeaderTitle;
  }

  async goToEditArticle() {
    await this.editArticleButtonLocator.click();
  }

  async deleteArticle() {
    await this.deleteArticleButtonLocator.click();
  }
}
