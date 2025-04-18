import { Page} from '@playwright/test';

export function getRandomString(length){
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

export const goToTextBoxFormPage = (page: Page) => page.goto('https://demoqa.com/text-box');
export const outputField = async(page: Page, id: string) => {const result = await page.locator(`//*[@id = "${id}" and @class = "mb-1"]`).textContent(); return result?.split(":")[1].trim();};

const getInputFieldById = (page: Page, id: string)=> page.locator(`#${id}`);

export async function fillTextBoxForm (page: Page, fullName: string, email: string, currentAddress: string, permanentAddress: string){
    await getInputFieldById(page,'userName').fill(fullName);
    await getInputFieldById(page, 'userEmail').fill(email);
    await getInputFieldById(page, 'currentAddress').fill(currentAddress);
    await getInputFieldById(page, 'permanentAddress').fill(permanentAddress);
};

