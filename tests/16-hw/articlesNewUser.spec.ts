import { expect } from "@playwright/test";
import { test } from "./conduitFixtureNewUser";
import {
  testArticleData,
  testEditedArticleData,
  newUseData,
} from "./test.data";

test("14-001 Create new article success", async ({
  homePage,
  signUpPage,
  articleEditorPage,
  articlePage,
}) => {
  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser(newUseData);

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle(testArticleData);

  await articleEditorPage.publishArticle();

  const articleHeader = await articlePage.getArticleHeaderTitle(
    testArticleData.title
  );

  await expect(articleHeader).toContain(testArticleData.title);
});

test("14-002 Edit new article success", async ({
  homePage,
  signUpPage,
  articleEditorPage,
  articlePage,
}) => {
  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser(newUseData);

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle(testArticleData);

  await articleEditorPage.publishArticle();

  await articlePage.goToEditArticle();

  await articleEditorPage.editArticle(testEditedArticleData);

  await articleEditorPage.publishArticle();

  const articleHeader = await articlePage.getArticleHeaderTitle(
    testEditedArticleData.title
  );

  expect(articleHeader).toContain(testEditedArticleData.title);
});

test("14-003 Delete new article success", async ({
  homePage,
  signUpPage,
  articleEditorPage,
  articlePage,
}) => {
  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser(newUseData);

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle(testArticleData);

  await articleEditorPage.publishArticle();

  await articlePage.deleteArticle();

  const globalFeedFirstArticle =
    await homePage.getGlobalFeedFirstArticleTitle();

  await expect(globalFeedFirstArticle).not.toContain(testArticleData.title);
});
