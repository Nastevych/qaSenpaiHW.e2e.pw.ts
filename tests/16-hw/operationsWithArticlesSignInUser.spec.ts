import { expect } from "@playwright/test";
import { test } from "./conduitFixture";
import { testArticleData, usersData } from "./test.data";
import { deleteAuthDataFileForUser } from "./helpers";

for (const user of usersData) {
  test.describe(`Operations with articles by ${user.role}`, () => {
    test.use({ authData: user });

    test(`16-002 create article by ${user.role} success`, async ({
      articleEditorPage,
      articlePage,
    }) => {
      await articleEditorPage.gotoEditorPage();

      await articleEditorPage.editArticle(testArticleData);

      await articleEditorPage.publishArticle();

      const articleHeader = await articlePage.getArticleHeaderTitle(
        testArticleData.title
      );

      await expect(articleHeader).toContain(testArticleData.title);
    });

    test.afterAll(async ({}) => {
      deleteAuthDataFileForUser(user.email);
    });
  });
}
