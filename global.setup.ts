import { FullConfig, chromium } from "@playwright/test";
import { usersData } from "./tests/16-hw/test.data.ts";
import { SignUpPage } from "./tests/16-hw/app/pages/SignUpPage";

export default async function globalSetup(config: FullConfig) {
  for (const user of usersData) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUpPage(page);
    try {
      await signUpPage.registerUser({
        pass: user.pass,
        email: user.email,
        username: user.role,
      });
    } catch (e) {
      console.log("User already exist");
    }
    await browser.close();
  }
}
