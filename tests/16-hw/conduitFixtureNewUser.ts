import { test as base, ConsoleMessage } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlePage } from "./app/pages/ArticlePage";
import { HomePage } from "./app/pages/HomePage";
import { SignInPage } from "./app/pages/SignInPage";
import fs from "fs";

type Fixture = {
  signUpPage: SignUpPage;
  articleEditorPage: ArticleEditorPage;
  articlePage: ArticlePage;
  homePage: HomePage;
  signInPage: SignInPage;
  authData: { pass?: string; email?: string };
};

export const test = base.extend<Fixture>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);

    await use(signUpPage);
  },

  articleEditorPage: async ({ page }, use) => {
    const articleEditorPage = new ArticleEditorPage(page);

    await use(articleEditorPage);
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

  // authData: {},

  // storageState: async ({ browser, authData }, use) => {
  //   const filePath = `tests/16-hw/.auth/auth${authData.email}.json`;

  //   const ifFileExist = fs.existsSync(filePath);

  //   if (ifFileExist === false) {
  //     const page = await browser.newPage();

  //     const signInPage = new SignInPage(page);

  //     await signInPage.signIn(authData);

  //     await page.waitForResponse("**/api/user/");

  //     await page.context().storageState({ path: filePath });

  //     await page.close();
  //   }

  //   await use(filePath);
  // },
});
