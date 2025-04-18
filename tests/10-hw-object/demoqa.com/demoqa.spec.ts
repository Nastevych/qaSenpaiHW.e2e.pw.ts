import { test, expect} from '@playwright/test';
import {getRandomString, goToTextBoxFormPage, fillTextBoxForm, outputField} from './helpers';

const formData = [
    {   
        id: '10-001',
        fullName: `Name${getRandomString(8)}`,
        email: `${getRandomString(8)}@mail.com`,
        currentAddress: `${getRandomString(8)} city`,
        permanentAddress: `${getRandomString(8)} city`
    },

    {   
        id: '10-002',
        fullName: `Name${getRandomString(8)}`,
        email: `${getRandomString(8)}@mail.com`,
        currentAddress: `${getRandomString(8)} city`,
        permanentAddress: `${getRandomString(8)} city`
    },

    {   
        id: '10-003',
        fullName: `Name${getRandomString(8)}`,
        email: `${getRandomString(8)}@mail.com`,
        currentAddress: `${getRandomString(8)} city`,
        permanentAddress: `${getRandomString(8)} city`
    },

    {   
        id: '10-004',
        fullName: `Name${getRandomString(8)}`,
        email: `${getRandomString(8)}@mail.com`,
        currentAddress: `${getRandomString(8)} city`,
        permanentAddress: `${getRandomString(8)} city`
    },

    {   
        id: '10-005',
        fullName: `Name${getRandomString(8)}`,
        email: `${getRandomString(8)}@mail.com`,
        currentAddress: `${getRandomString(8)} city`,
        permanentAddress: `${getRandomString(8)} city`
    },
]

for (const form of formData){
    test(`${form.id} Success text form fill`, async({page}) => {
        await goToTextBoxFormPage(page);
        await fillTextBoxForm(page, form.fullName, form.email, form.currentAddress, form.permanentAddress);
        await page.locator('#submit').click();
        
        const outputData = {
        id: `${form.id}`,
        fullName: await outputField(page, 'name'),
        email: await outputField(page, 'email'),
        currentAddress: await outputField(page, 'currentAddress'),
        permanentAddress: await outputField(page, 'permanentAddress')
        };
        
        await expect (outputData).toEqual(formData.find(formData => formData.id === `${form.id}`));

    });
};