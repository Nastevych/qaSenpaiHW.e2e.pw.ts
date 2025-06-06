import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export abstract class ArticleEditorPage extends BasePage {
  private titleLocator: Locator;
  private descriptionLocator: Locator;
  private bodyLocator: Locator;
  private publishArticleButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = page.locator('[data-qa-id="editor-title"]');
    this.descriptionLocator = page.locator(`[data-qa-id="editor-description"]`);
    this.bodyLocator = page.getByRole("textbox", {
      name: "Write your article",
    });
    this.publishArticleButtonLocator = page.locator(`//button[@type="submit"]`);
  }

  protected async gotoArticleEditorPage() {
    await this.page.goto("/editor");
  }

  protected async editArticle(articleData: {
    title: string;
    description: string;
    body: string;
  }) {
    await this.titleLocator.fill(articleData.title);
    await this.descriptionLocator.fill(articleData.description);
    await this.bodyLocator.fill(articleData.body);
  }

  protected async publishArticle() {
    await this.publishArticleButtonLocator.click();
  }
}
