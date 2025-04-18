import { test, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlePage } from "./app/pages/ArticlePage";
import { HomePage } from "./app/pages/HomePage";
import { getRandomString } from "./helpers";

test("14-001 Create new article success", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlePage = new ArticlePage(page);
  const homePage = new HomePage(page);

  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser({
    username: getRandomString(8),
    email: getRandomString(8) + "@ami.co",
    pass: getRandomString(8),
  });

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = articlePage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});

test("14-002 Edit new article success", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlePage = new ArticlePage(page);
  const homePage = new HomePage(page);

  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser({
    username: getRandomString(8),
    email: getRandomString(8) + "@ami.co",
    pass: getRandomString(8),
  });

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  await articlePage.editArticle({
    title: "edited title",
    description: "edited desc",
    body: "edited body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = articlePage.getArticleLocatorByTitle("edited title");
  await expect(articleHeader).toBeVisible();
});

test("14-003 Delete new article success", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlePage = new ArticlePage(page);
  const homePage = new HomePage(page);

  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser({
    username: getRandomString(8),
    email: getRandomString(8) + "@ami.co",
    pass: getRandomString(8),
  });

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  await articlePage.deleteArticle();

  const globalFeedFirstArticle = await page
    .locator('//h1[@data-qa-type="preview-title"]')
    .first()
    .textContent();

  await expect(globalFeedFirstArticle).not.toContain("random title");
});
