import { expect } from "@playwright/test";
import { test } from "./conduitFixture";
import { testArticleData, usersData } from "./test.data";
import fs from "fs";
import path from "path";

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
  fs.readdirSync("tests/16-hw/.auth").forEach((file) => {
    if (file.includes(usersData.contentAdmin.email)) {
      fs.rmSync(path.join("tests/16-hw/.auth", file));
    }
  });
});
