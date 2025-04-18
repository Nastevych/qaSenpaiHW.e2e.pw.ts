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

async function signUpNewUser (page: Page, username, email, password){
    await getInputField(page, "Username").fill(username);
    await getInputField(page, "Email").fill(email);
    await getInputField(page, "Password").fill(password);
    await page.locator(`//button[contains(text(),"Sign up")]`).click();
};

async function createNewArticle(page: Page, username: string, count: number) {
    await page.locator(`//a[@href="/editor"]`).click();
    await page.locator('[data-qa-id="editor-title"]').fill(`${Username} Article №${count+1}`);
    await page.locator('[data-qa-id="editor-description"]').fill(`${Username} Article №${count+1} description`);
    await page.getByRole("textbox", {name: "Write your article"}).fill(`${Username} Article №${count+1} content`);
    await page.locator(`//button[@type="submit"]`).click();
    await page.locator(`//button[@type="submit"]`).waitFor({state:"hidden"});
};


function goMainPage(page: Page){
    page.goto(`https://demo.learnwebdriverio.com`);
};

function userArticles(page: Page, username: string){
    const MyArticles =  page.locator(`//*[@data-qa-type="preview-title" and contains(text(), "${username}")]`);
    return MyArticles; 
};

//#endregion

const Username = getRandomString(8);
const Email = getRandomString(8)+"@gmail.com";
const Password = getRandomString(8);

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    });

test ('036 success add 10 new article to new user feed', async ({ page }) => {
    
    const articlesNeeded = 10;
    
    await signUpNewUser(page, Username, Email, Password);
        
    for (let i = 0; i < articlesNeeded; i++){
        await createNewArticle(page, Username, i);
        };
    
    await goMainPage(page);
    
    await userArticles(page, Username)
    .first()
    .waitFor({state:"visible"});
    
    const createdArticles = await 
    userArticles(page, Username).count();
    
    await expect(createdArticles).toBe(articlesNeeded);
    });