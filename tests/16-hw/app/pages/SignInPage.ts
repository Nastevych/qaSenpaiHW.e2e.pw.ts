import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignInPage extends BasePage {
  private passwordLocator: Locator;
  private emailLocator: Locator;
  private signInButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.passwordLocator = this.page.locator('[placeholder="Password"]');
    this.emailLocator = this.page.locator('[placeholder="Email"]');
    this.signInButtonLocator = this.page.locator(
      `//button[contains(text(),"Sign in")]`
    );
  }

  async gotSignInPage() {
    await this.page.goto("https://demo.learnwebdriverio.com/login");
  }

  private async setPassword(password: string = "") {
    await this.passwordLocator.fill(password);
  }

  private async setEmail(email: string = "") {
    await this.emailLocator.fill(email);
  }

  async clickSignIn() {
    await this.signInButtonLocator.click();
  }

  async signIn(signINData: { role?: string; pass?: string; email?: string }) {
    await this.gotSignInPage();
    await this.setEmail(signINData.email);
    await this.setPassword(signINData.pass);
    await this.clickSignIn();
  }
}
