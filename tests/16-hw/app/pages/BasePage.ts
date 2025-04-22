import { Locator, Page } from "@playwright/test";
import { HeaderComponentGuestUser } from "./components/HeaderComponentGuestUser";
import { HeaderComponentAuthorizedUser } from "./components/HeaderComponentAuthorizeUser";

export class BasePage {
  protected page: Page;
  protected headerLogoHomePageNavButtonLocator: Locator;
  protected headerHomeNavButtonLocator: Locator;
  headerComponentGuestUser: HeaderComponentGuestUser;
  headerComponentAuthorizedUser: HeaderComponentAuthorizedUser;

  constructor(page: Page) {
    this.page = page;
    this.headerLogoHomePageNavButtonLocator = page
      .getByRole("link", { name: "conduit" })
      .first();
    this.headerHomeNavButtonLocator = page.getByRole("link", { name: "Home" });
    this.headerComponentGuestUser = new HeaderComponentGuestUser(page);
    this.headerComponentAuthorizedUser = new HeaderComponentAuthorizedUser(
      page
    );
  }

  async goToHomePage() {
    await this.page.goto("");
  }

  async goToMainPageUsingHeaderLogoButton() {
    await this.headerLogoHomePageNavButtonLocator.click();
  }

  async goToMainPageUsingHeaderHomeButton() {
    await this.headerHomeNavButtonLocator.click();
  }
}
