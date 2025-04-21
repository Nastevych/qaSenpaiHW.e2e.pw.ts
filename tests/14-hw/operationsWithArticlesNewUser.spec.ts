import { test, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticlePage } from "./app/pages/ArticlePage";
import { HomePage } from "./app/pages/HomePage";
import { ArticleCreationPage } from "./app/pages/ArticleCreationPage";
import { ArticleEditingPage } from "./app/pages/ArticleEditingPage";
import { testArticleData, testEditedArticleData } from "./testArticle.data";
import { newUseData } from "./testUser.data";

test("14-001 Create new article success", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleCreationPage = new ArticleCreationPage(page);
  const articlePage = new ArticlePage(page);

  await signUpPage.registerNewUser(newUseData);

  await articleCreationPage.createArticle(testArticleData);

  expect(await articlePage.getArticleHeaderTitle()).toContain(
    testArticleData.title
  );
});

test("14-002 Edit new article success", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditingPage = new ArticleEditingPage(page);
  const articlePage = new ArticlePage(page);

  await signUpPage.registerNewUser(newUseData);

  await articleEditingPage.createArticle(testArticleData);

  await articlePage.goToEditArticleByBannerEditArticleButton();

  await articleEditingPage.editArticle(testEditedArticleData);

  expect(await articlePage.getArticleHeaderTitle()).toContain(
    testEditedArticleData.title
  );
});

test("14-003 Delete new article success", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleCreationPage = new ArticleCreationPage(page);
  const articlePage = new ArticlePage(page);
  const homePage = new HomePage(page);

  await signUpPage.registerNewUser(newUseData);

  await articleCreationPage.createArticle(testArticleData);

  await articlePage.deleteArticleByBannerDeleteArticleButton();

  await expect(await homePage.getGlobalFeedFirstArticleTitle()).not.toContain(
    "random title"
  );
});
