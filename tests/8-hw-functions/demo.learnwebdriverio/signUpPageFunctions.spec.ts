import { test, expect, Page } from '@playwright/test';
import { exec } from 'child_process';
//#region
function getInputField(page: Page, placeholder: string){
    const InputField = page
    .locator (`//input[@placeholder="${placeholder}"]`);
    return InputField;
};

function getRandomString(length){
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

async function signUpNewUser (page: Page, username, email, password){
    await getInputField(page, "Username").fill(username);
    await getInputField(page, "Email").fill(email);
    await getInputField(page, "Password").fill(password);
    await page.locator(`//button[contains(text(),"Sign up")]`).click();
};

//#endregion

const Username = getRandomString(8);
const Email = getRandomString(8)+"@gmail.com";
const Password = getRandomString(8);

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    });
    
    
test ('037 success sign up', async ({ page }) => {
    const userProfilePageLink = page.locator(`//a[@href = "/@${Username}/"]`);

    signUpNewUser(page, Username, Email, Password);
        
    await expect (userProfilePageLink).toHaveText(Username);
    });

test ('038 failed sign up, empty form', async ({ page }) => {
    const ErrorMassageText = page.locator(`//*[@class="error-messages"]`);
    
    await page.locator(`//button[contains(text(),"Sign up")]`).click();
        
    await expect(ErrorMassageText).toContainText('username can\'t be blank');
    await expect(ErrorMassageText).toContainText('email can\'t be blank');
    });