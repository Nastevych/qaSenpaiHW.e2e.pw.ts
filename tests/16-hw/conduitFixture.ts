import { test as base, ConsoleMessage } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticlePage } from "./app/pages/ArticlePage";
import { HomePage } from "./app/pages/HomePage";
import { SignInPage } from "./app/pages/SignInPage";
import fs from "fs";
import { ArticleCreationPage } from "./app/pages/ArticleCreationPage";
import { ArticleEditingPage } from "./app/pages/ArticleEditingPage";

type Fixture = {
  signUpPage: SignUpPage;
  articlePage: ArticlePage;
  homePage: HomePage;
  signInPage: SignInPage;
  authData: { role?: string; pass?: string; email?: string };
  articleCreationPage: ArticleCreationPage;
  articleEditingPage: ArticleEditingPage;
};

export const test = base.extend<Fixture>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);

    await use(signUpPage);
  },

  articleCreationPage: async ({ page }, use) => {
    const articleCreationPage = new ArticleCreationPage(page);

    await use(articleCreationPage);
  },

  articleEditingPage: async ({ page }, use) => {
    const articleEditingPage = new ArticleEditingPage(page);

    await use(articleEditingPage);
  },

  articlePage: async ({ page }, use) => {
    const articlePage = new ArticlePage(page);

    await use(articlePage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },

  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);

    await use(signInPage);
  },

  authData: {},

  storageState: async ({ browser, authData }, use) => {
    if (Object.keys(authData).length !== 0) {
      const filePath = `tests/16-hw/.auth/auth-${authData.role}.json`;

      const ifFileExist = fs.existsSync(filePath);

      if (ifFileExist === false) {
        const page = await browser.newPage();

        const signInPage = new SignInPage(page);

        await signInPage.signIn(authData);

        await page.waitForResponse("**/api/user/");

        await page.context().storageState({ path: filePath });

        await page.close();
      }

      await use(filePath);
    } else {
      await use(undefined);
    }
  },
});
