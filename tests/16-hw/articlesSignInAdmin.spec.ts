import { expect } from "@playwright/test";
import { test } from "./conduitFixtureRegisteredUser";
import { testArticleData, usersData } from "./test.data";
import fs from "fs";
import path from "path";

test.use({ authData: usersData.admin });

test(`16-001 create article by admin success`, async ({
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
    if (file.includes(usersData.admin.email)) {
      fs.rmSync(path.join("tests/16-hw/.auth", file));
    }
  });
});
