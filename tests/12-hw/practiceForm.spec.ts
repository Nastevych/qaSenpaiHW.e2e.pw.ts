import { test, expect, Page } from "@playwright/test";
import path from "path";
import {
  userData,
  getSubmittedFormValues,
  studentNameSubmitted,
  studentLastNameSubmitted,
  studentCitySubmitted,
  studentStateSubmitted,
  submittedSubjects,
  getdateSubmittedOfBirth,
} from "./usersData";

const practiceFormURL = "https://demoqa.com/automation-practice-form";

function RegistrationForm(page: Page) {
  this.page = page;
  (this.setFirstName = async (page, firstName: string) => {
    await page.locator("#firstName").fill(`${firstName}`);
  }),
    (this.setLastName = async (page, lastName: string) => {
      await page.locator("#lastName").fill(`${lastName}`);
    }),
    (this.setUserEmail = async (page, userEmail: string) => {
      await page.locator("#userEmail").fill(`${userEmail}`);
    }),
    (this.setGender = async (page, gender: string) => {
      await page.getByText(`${gender}`, { exact: true }).click();
    }), //locator(`[value = "${gender}"]`).click({force: true})},
    (this.setUserNumber = async (page, userNumber: string) => {
      await page.locator("#userNumber").fill(`${userNumber}`);
    }),
    (this.setDateOfBirthInput = async (page, dateOfBirthInput: string) => {
      await page.locator("#dateOfBirthInput").fill(`${dateOfBirthInput}`);
    }),
    (this.setSubjects = async (page, subjects: string[]) => {
      for (const subject of subjects) {
        await page.locator("#subjectsInput").fill(subject);
        await page
          .locator(`//*[@id = "subjectsWrapper"]//*[contains(@id, "option")]`, {
            hasText: `${subject}`,
          })
          .click();
      }
    }),
    (this.setHobbies = async (page, hobbiesName: string) => {
      await page.getByText(`${hobbiesName}`, { exact: true }).check();
    }),
    (this.setPicture = async (page, filesFolder: string, fileName: string) => {
      await page
        .locator(`#uploadPicture`)
        .setInputFiles(path.join(__dirname, filesFolder, fileName));
    }),
    (this.setCurrentAddress = async (page, currentAddress: string) => {
      await page.locator(`#currentAddress`).fill(`${currentAddress}`);
    }),
    (this.setState = async (page, stateName: string) => {
      await page.locator(`#state`).click();
      await page
        .locator(`//*[@id = "state"]//*[contains(@id, "option")]`, {
          hasText: `${stateName}`,
        })
        .click();
    }),
    (this.setCity = async (page, cityName: string) => {
      await page.locator(`#city`).click();
      await page
        .locator(`//*[@id = "city"]//*[contains(@id, "option")]`, {
          hasText: `${cityName}`,
        })
        .click();
    }),
    (this.submitForm = async (page) => {
      await page.locator("#submit").click();
    });
}

test.beforeEach(async ({ page }) => {
  await page.route(new RegExp("ad"), (route) => {
    route.abort();
  });
});

test("12-001 practice form fill success", async ({ page }) => {
  const registrationForm = new RegistrationForm(page);

  await page.goto(practiceFormURL);
  await registrationForm.setFirstName(page, userData.firstName);
  await registrationForm.setLastName(page, userData.lastName);
  await registrationForm.setUserEmail(page, userData.email);
  await registrationForm.setGender(page, userData.gender);
  await registrationForm.setUserNumber(page, userData.mobile);
  await registrationForm.setDateOfBirthInput(page, userData.dateOfBirth);
  await registrationForm.setSubjects(page, userData.subjects);
  await registrationForm.setHobbies(page, userData.hobbies);
  await registrationForm.setPicture(page, "pictures", userData.picture);

  const selectedPicture = await page
    .getByRole("textbox", { name: "Select picture" })
    .inputValue();
  await expect(selectedPicture).toContain(userData.picture);

  await registrationForm.setCurrentAddress(page, userData.currentAddress);
  await registrationForm.setState(page, userData.state);
  await registrationForm.setCity(page, userData.city);
  await registrationForm.submitForm(page);

  const submittedFormData = {
    firstName: await studentNameSubmitted(page),
    lastName: await studentLastNameSubmitted(page),
    email: await getSubmittedFormValues(page, "Email"),
    gender: await getSubmittedFormValues(page, "Gender"),
    mobile: await getSubmittedFormValues(page, "Mobile"),
    dateOfBirth: await getdateSubmittedOfBirth(page),
    subjects: await submittedSubjects(page),
    hobbies: await getSubmittedFormValues(page, "Hobbies"),
    picture: await getSubmittedFormValues(page, "Picture"),
    currentAddress: await getSubmittedFormValues(page, "Address"),
    state: await studentStateSubmitted(page),
    city: await studentCitySubmitted(page),
  };

  await expect(submittedFormData).toEqual(userData);
});
