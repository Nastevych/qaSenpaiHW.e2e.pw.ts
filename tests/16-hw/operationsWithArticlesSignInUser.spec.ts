import { expect } from "@playwright/test";
import { test } from "./conduitFixture";
import { testArticleData, testEditedArticleData, usersData } from "./test.data";
import { deleteAuthDataFileForUser } from "./helpers";

for (const user of usersData) {
  test.describe(`Operations with articles by ${user.role}`, () => {
    test.use({ authData: user });

    test.beforeEach(async ({ articleCreationPage }) => {
      await articleCreationPage.createArticle(testArticleData);
    });

    test(`16-001 create article by ${user.role} success`, async ({
      articlePage,
    }) => {
      const articleHeaderTitle = articlePage.articleHeaderTitleLocator(
        testArticleData.title
      );
      await expect(articleHeaderTitle).toBeVisible();
    });

    test(`16-002  Edit new article by ${user.role} success`, async ({
      articlePage,
      articleEditingPage,
    }) => {
      await articlePage.goToEditArticle();
      await articleEditingPage.editArticle(testEditedArticleData);

      const articleHeaderTitle = articlePage.articleHeaderTitleLocator(
        testEditedArticleData.title
      );
      await expect(articleHeaderTitle).toBeVisible();
    });

    test(`16-003  Delete new article by ${user.role} success`, async ({
      articlePage,
      homePage,
    }) => {
      await articlePage.deleteArticle();

      expect(await homePage.getGlobalFeedFirstArticleTitle()).not.toContain(
        testArticleData.title
      );
    });

    // test.afterAll(async ({}) => {
    //   deleteAuthDataFileForUser(user.role);
    // });
  });
}
