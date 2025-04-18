import { Locator, Page } from "@playwright/test";
import { ArticleEditorPage } from "./ArticleEditorPage";
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
  private editArticleButtonLocator: Locator;
  private deleteArticleButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.editArticleButtonLocator = page.locator(
      '//*[@class = "article-actions"]//*[contains(@href, "editor")]'
    );
    this.deleteArticleButtonLocator = page.locator(
      '//*[@class = "banner"]//button[@data-qa-id="article-delete"]'
    );
  }

  getArticleLocatorByTitle(title: string) {
    return this.page.getByRole("heading", {
      name: title,
    });
  }

  async editArticle(articleData: {
    title: string;
    description: string;
    body: string;
  }) {
    const articleEditorPage = new ArticleEditorPage(this.page);

    await this.editArticleButtonLocator.click();

    await articleEditorPage.editArticle({
      title: articleData.title,
      description: articleData.description,
      body: articleData.body,
    });
  }

  async deleteArticle() {
    await this.deleteArticleButtonLocator.click();
  }
}
