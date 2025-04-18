import { Page } from "@playwright/test";

export const getSubmittedFormValues = (page: Page, label: string) =>
  page
    .locator(`//td[contains(text(), "${label}")]/following-sibling::td`)
    .textContent();

export const studentNameSubmitted = async (page: Page) => {
  const name = await page
    .locator(`//td[contains(text(), "Name")]/following-sibling::td`)
    .textContent();
  return name?.split(" ")[0].trim();
};
export const studentLastNameSubmitted = async (page: Page) => {
  const lastName = await page
    .locator(`//td[contains(text(), "Name")]/following-sibling::td`)
    .textContent();
  return lastName?.split(" ")[1].trim();
};

export async function getdateSubmittedOfBirth(page: Page) {
  const dateOfBirth = await getSubmittedFormValues(page, "Birth");
  return dateOfBirth?.replace(/,/, " ");
}

export const submittedSubjects = async (page: Page) => {
  const subjectsString = await getSubmittedFormValues(page, "Subjects");
  const subjectsArr = subjectsString?.split(/,/).map((item) => item.trim());
  return subjectsArr;
};
