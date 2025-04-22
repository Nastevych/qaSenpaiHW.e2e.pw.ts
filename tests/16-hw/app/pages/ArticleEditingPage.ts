import { ArticleEditorPage } from "./ArticleEditorPage";

export class ArticleEditingPage extends ArticleEditorPage {
  async editArticle(articleData: {
    title: string;
    description: string;
    body: string;
  }) {
    await super.editArticle(articleData);
    await super.publishArticle();
  }
}
