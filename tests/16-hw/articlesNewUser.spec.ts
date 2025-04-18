import { expect } from "@playwright/test";
import { test } from "./conduitFixture";
import { getRandomString } from "./helpers";

test("14-001 Create new article success", async ({
  homePage,
  signUpPage,
  articleEditorPage,
  articlePage,
}) => {
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

  const articleHeader = await articlePage.getArticleHeaderTitle("random title");

  await expect(articleHeader).toContain("random title");
});

test("14-002 Edit new article success", async ({
  homePage,
  signUpPage,
  articleEditorPage,
  articlePage,
}) => {
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

  await articlePage.goToEditArticle();

  await articleEditorPage.editArticle({
    title: "edited title",
    description: "edited desc",
    body: "edited body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = await articlePage.getArticleHeaderTitle("edited title");

  expect(articleHeader).toContain("edited title");
});

test("14-003 Delete new article success", async ({
  homePage,
  signUpPage,
  articleEditorPage,
  articlePage,
}) => {
  await signUpPage.gotSignUpNewUserPage();
  await signUpPage.registerUser({
    username: getRandomString(8),
    email: getRandomString(8) + "@ami.co",
    pass: getRandomString(8),
  });

  await homePage.goToCreateNewArticlePageUsingHeaderButton();

  await articleEditorPage.editArticle({
    title: "random title1",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  await articlePage.deleteArticle();

  const globalFeedFirstArticle =
    await homePage.getGlobalFeedFirstArticleTitle();

  await expect(globalFeedFirstArticle).not.toContain("random title1");
});
