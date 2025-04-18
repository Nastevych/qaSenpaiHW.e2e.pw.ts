import { Locator, Page } from "@playwright/test"; 

export class SignUpPage {
    page: Page; 
    usernameLocator: Locator; 
    passwordLocator: Locator; 
    emailLocator: Locator; 
    signUpButtonLocator: Locator; 
  
    constructor(page: Page) {
      this.page = page; 
      this.usernameLocator = this.page.locator('[placeholder="Username"]');
      this.emailLocator = this.page.locator('[placeholder="Email"]'); 
      this.passwordLocator = this.page.locator('[placeholder="Password"]'); 
      this.signUpButtonLocator = this.page.locator(`//button[contains(text(),"Sign up")]`);
    }
  
    async setSignUpPage (username: string, email: string, password: string) {
      await this.usernameLocator.fill(username);
      await this.emailLocator.fill(email);
      await this.passwordLocator.fill(password); 
    }
  };

  export class SignInPage {
    page: Page; 
    passwordLocator: Locator; 
    emailLocator: Locator; 
    signInButtonLocator: Locator; 
  
    constructor(page: Page) {
      this.page = page; 
      this.passwordLocator = this.page.locator('[placeholder="Password"]'); 
      this.emailLocator = this.page.locator('[placeholder="Email"]'); 
      this.signInButtonLocator = this.page.locator(`//button[contains(text(),"Sign in")]`);
    }
  
    async setSignInPage (email: string, password: string) {
      await this.emailLocator.fill(email);
      await this.passwordLocator.fill(password); 
    }
  }