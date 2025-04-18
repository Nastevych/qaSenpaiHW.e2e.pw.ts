import { faker } from "@faker-js/faker";
import { Page } from "@playwright/test";

const genders = ["Male", "Female", "Other"];
const subjects = ["Chemistry", "Hindi", "Accounting", "Computer Science"];
const hobbies = ["Sports", "Reading", "Music"];
const statesAndCities = [
  { state: "NCR", cities: ["Delhi", "Gurgaon", "Noida"] },
  { state: "Uttar Pradesh", cities: ["Agra", "Lucknow", "Merrut"] },
  { state: "Haryana", cities: ["Karnal", "Panipat"] },
  { state: "Rajasthan", cities: ["Jaipur", "Jaiselmer"] },
];
const stateIndex = faker.number.int({
  min: 0,
  max: statesAndCities.length - 1,
});

export const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: genders[faker.number.int({ min: 0, max: genders.length - 1 })],
  mobile: faker.number.int({ min: 1000000000, max: 9999999999 }).toString(),
  dateOfBirth: faker.date
    .birthdate({ min: 18, max: 65, mode: "age" })
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  subjects: [subjects[0], subjects[3]],
  hobbies: hobbies[faker.number.int({ min: 0, max: hobbies.length - 1 })],
  picture: "test_picture.png",
  currentAddress: faker.location.streetAddress(),
  state: statesAndCities[stateIndex].state,
  city: statesAndCities[stateIndex].cities[
    faker.number.int({
      min: 0,
      max: statesAndCities[stateIndex].cities.length - 1,
    })
  ],
};

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

export const studentCitySubmitted = async (page: Page) => {
  const name = await page
    .locator(`//td[contains(text(), "State and City")]/following-sibling::td`)
    .textContent();
  return name?.substring(name.lastIndexOf(" ") + 1).trim();
};
export const studentStateSubmitted = async (page: Page) => {
  const lastName = await page
    .locator(`//td[contains(text(), "State and City")]/following-sibling::td`)
    .textContent();
  return lastName?.substring(0, lastName.lastIndexOf(" ")).trim();
};

export const submittedSubjects = async (page: Page) => {
  const subjectsString = await getSubmittedFormValues(page, "Subjects");
  const subjectsArr = subjectsString?.split(/,/).map((item) => item.trim());
  return subjectsArr;
};
