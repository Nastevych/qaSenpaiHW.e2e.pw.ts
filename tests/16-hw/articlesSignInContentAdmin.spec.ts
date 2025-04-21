import { expect } from "@playwright/test";
import { test } from "./conduitFixture";
import { testArticleData, usersData } from "./test.data";
import {deleteAuthDataFileForUser} from './helpers'

test.use({ authData: usersData.contentAdmin });

test(`16-002 create article by contentAdmin success`, async ({
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
  deleteAuthDataFileForUser(usersData.admin.email);
});
