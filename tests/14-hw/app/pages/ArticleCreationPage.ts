import { ArticleEditorPage } from "./ArticleEditorPage";

export class ArticleCreationPage extends ArticleEditorPage {
  async createArticle(articleData: {
    title: string;
    description: string;
    body: string;
  }) {
    await super.gotoArticleEditorPage();
    await super.editArticle(articleData);
    await super.publishArticle();
  }
}
