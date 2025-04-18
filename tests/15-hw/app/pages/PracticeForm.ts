import { Locator, Page } from "@playwright/test";

export class PracticeForm {
  private page: Page;
  private firstNameLocator: Locator;
  private lastNameLocator: Locator;
  private userEmailLocator: Locator;
  private genderLocator: (gender: string) => Locator;
  private userNumberLocator: Locator;
  private dateOfBirthInputLocator: Locator;
  private subjectsLocator: Locator;
  private subjectsListLocator: Locator;
  private hobbiesLocator: (hobbiesName: string) => Locator;
  private pictureLocator: Locator;
  private stateLocator: Locator;
  private stateListLocator: (stateName: string) => Locator;
  private cityLocator: Locator;
  private citiesListLocator: (cityName: string) => Locator;
  private submitFormButtonLocator: Locator;
  private currentAddressLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameLocator = this.page.locator("#firstName");
    this.lastNameLocator = this.page.locator("#lastName");
    this.userEmailLocator = this.page.locator("#userEmail");
    this.genderLocator = (gender: string) =>
      this.page.getByText(`${gender}`, { exact: true });
    this.userNumberLocator = this.page.locator("#userNumber");
    this.dateOfBirthInputLocator = this.page.locator("#dateOfBirthInput");
    this.subjectsLocator = this.page.locator("#subjectsInput");
    this.subjectsListLocator = this.page.locator(`#react-select-2-option-0`);
    this.hobbiesLocator = (hobbiesName: string) =>
      this.page.getByText(`${hobbiesName}`, { exact: true });
    this.pictureLocator = this.page.locator(`#uploadPicture`);
    this.currentAddressLocator = this.page.locator(`#currentAddress`);
    this.stateLocator = this.page.locator(`#state`);
    this.stateListLocator = (stateName: string) =>
      this.page.locator(`//*[@id = "state"]//*[contains(@id, "option")]`, {
        hasText: `${stateName}`,
      });
    this.cityLocator = this.page.locator(`#city`);
    this.citiesListLocator = (cityName: string) =>
      this.page.locator(`//*[@id = "city"]//*[contains(@id, "option")]`, {
        hasText: `${cityName}`,
      });
    this.submitFormButtonLocator = this.page.locator("#submit");
  }

  async goToPracticeForm() {
    await this.page.goto("https://demoqa.com/automation-practice-form");
  }

  async setFirstName(firstName: string = "") {
    await this.firstNameLocator.fill(firstName);
  }

  async setLastName(lastName: string = "") {
    await this.lastNameLocator.fill(lastName);
  }

  async setUserEmail(userEmail: string = "") {
    await this.userEmailLocator.fill(userEmail);
  }

  async setGender(gender: string = "") {
    await this.genderLocator(gender).click();
  }

  async setUserNumber(userNumber: string = "") {
    await this.userNumberLocator.fill(userNumber);
  }

  async setDateOfBirthInput(dateOfBirthInput: string = "") {
    await this.dateOfBirthInputLocator.fill(dateOfBirthInput);
  }

  async setSubjects(subjects: string[] = []) {
    for (const subject of subjects) {
      await this.subjectsLocator.fill(subject);
      await this.subjectsListLocator.click();
    }
  }

  async setHobbies(hobbiesName: string = "") {
    await this.hobbiesLocator(hobbiesName).check();
  }

  async setPicture(fileName: string = "") {
    await this.pictureLocator.setInputFiles("tests/15-hw/pictures/" + fileName);
  }

  async setCurrentAddress(currentAddress: string = "") {
    await this.currentAddressLocator.fill(currentAddress);
  }

  async setPracticeForm(userData: {
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    mobile?: string;
    dateOfBirth?: string;
    subjects?: string[];
    hobbies?: string;
    picture?: string;
    currentAddress?: string;
  }) {
    await this.goToPracticeForm();
    await this.setFirstName(userData.firstName);
    await this.setLastName(userData.lastName);
    await this.setUserEmail(userData.email);
    await this.setGender(userData.gender);
    await this.setUserNumber(userData.mobile);
    await this.setDateOfBirthInput(userData.dateOfBirth);
    await this.setSubjects(userData.subjects);
    await this.setHobbies(userData.hobbies);
    await this.setPicture(userData.picture);
    await this.setCurrentAddress(userData.currentAddress);
  }

  async submitPracticeForm() {
    await this.submitFormButtonLocator.click();
  }
}
