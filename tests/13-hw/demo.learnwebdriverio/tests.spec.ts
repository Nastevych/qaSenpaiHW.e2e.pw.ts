import { test, expect } from "@playwright/test"; 
import {SignUpPage, SignInPage} from "./classes";

const registerURL = "https://demo.learnwebdriverio.com/register";
const loginURL = "https://demo.learnwebdriverio.com/login";

const username = "borys";
const email = "borys@gm.com";
const password = "123456789";

test ('13-001 sign up success', async ({page}) => {
    const signUpPage = new SignUpPage(page);

    await page.goto(registerURL);
    await signUpPage.setSignUpPage(username, email, password);
    await signUpPage.signUpButtonLocator.click();

    await expect (page.locator(`//a[@href = "/@${username}/"]`)).toHaveText(username);
});

test ('13-002 sign in success', async ({page}) => {
    const signInPage = new SignInPage(page);

    await page.goto(loginURL);
    await signInPage.setSignInPage(email, password);
    await signInPage.signInButtonLocator.click();

    await expect (page.locator(`//a[@href = "/@${username}/"]`)).toHaveText(username);
});