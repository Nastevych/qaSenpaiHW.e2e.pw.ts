import { expect } from "@playwright/test";
import { test } from "./conduitFixture";
import { testArticleData, usersData } from "./test.data";
import fs from "fs";

test.use({ authData: usersData.admin });

test("16-001 create article", async ({ articleEditorPage, articlePage }) => {
  await articleEditorPage.gotoEditorPage();

  await articleEditorPage.editArticle(testArticleData);

  await articleEditorPage.publishArticle();

  const articleHeader = await articlePage.getArticleHeaderTitle(
    testArticleData.title
  );

  await expect(articleHeader).toContain(testArticleData.title);
});

test.afterAll(async ({}) => {});
