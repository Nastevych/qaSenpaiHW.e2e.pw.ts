import { test, expect, Page } from '@playwright/test';
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
//#endregion

const Username = getRandomString(8);
const Email = getRandomString(8)+"@gmail.com";
const Password = getRandomString(8);

const signUpConfirmButton = `//button[contains(text(),"Sign up")]`;

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    });
    
    
test ('success sign up', async ({ page }) => {
    const userProfilePageLink = page.locator(`//a[@href = "/@${Username}/"]`);

    await getInputField(page, "Username").fill(Username);
    await getInputField(page, "Email").fill(Email);
    await getInputField(page, "Password").fill(Password);
    await page.locator(signUpConfirmButton).click();
        
    await expect (userProfilePageLink).toHaveText(Username);
    });

test ('failed sign up, empty form', async ({ page }) => {
    const ErrorMassageText = page.locator(`//*[@class="error-messages"]`);
    
    await page.locator(signUpConfirmButton).click();
        
    await expect(ErrorMassageText).toContainText('username can\'t be blank');
    await expect(ErrorMassageText).toContainText('email can\'t be blank');
    });