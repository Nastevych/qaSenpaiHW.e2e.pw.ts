import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignUpPage extends BasePage {
  private usernameLocator: Locator;
  private passwordLocator: Locator;
  private emailLocator: Locator;
  private signUpButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameLocator = this.page.locator('[placeholder="Username"]');
    this.emailLocator = this.page.locator('[placeholder="Email"]');
    this.passwordLocator = this.page.locator('[placeholder="Password"]');
    this.signUpButtonLocator = this.page.locator(
      `//button[contains(text(),"Sign up")]`
    );
  }

  async gotSignUpNewUserPage() {
    await this.page.goto("https://demo.learnwebdriverio.com/register");
  }

  private async setUsername(username: string = "") {
    await this.usernameLocator.fill(username);
  }

  private async setPassword(password: string = "") {
    await this.passwordLocator.fill(password);
  }

  private async setEmail(email: string = "") {
    await this.emailLocator.fill(email);
  }

  async clickSignUp() {
    await this.signUpButtonLocator.click();
  }

  async registerUser(registrationData: {
    pass?: string;
    email?: string;
    username?: string;
  }) {
    await this.gotSignUpNewUserPage();
    await this.setUsername(registrationData.username);
    await this.setEmail(registrationData.email);
    await this.setPassword(registrationData.pass);
    await this.clickSignUp();
    await this.signUpButtonLocator.waitFor({ state: "hidden" });
  }
}
