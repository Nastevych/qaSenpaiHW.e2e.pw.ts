import { Locator, Page } from "@playwright/test";

export class PracticeFormSubmitted {
  private page: Page;
  private submittedFormValuesLocator: (label: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.submittedFormValuesLocator = (label: string) =>
      this.page.locator(
        `//td[contains(text(), "${label}")]/following-sibling::td`
      );
  }

  private async getStudentNameSubmitted() {
    const name = await this.submittedFormValuesLocator("Name").textContent();
    return name?.split(" ")[0].trim();
  }

  private async getStudentLastNameSubmitted() {
    const lastName =
      await this.submittedFormValuesLocator("Name").textContent();
    return lastName?.split(" ")[1].trim();
  }

  private async getdateOfBirthSubmitted() {
    const dateOfBirth =
      await this.submittedFormValuesLocator("Birth").textContent();
    return dateOfBirth?.replace(/,/, " ");
  }

  private async getSubjectSubmitted() {
    const subjectsString =
      await this.submittedFormValuesLocator("Subjects").textContent();
    const subjectsArr = subjectsString?.split(/,/).map((item) => item.trim());
    return subjectsArr;
  }

  private async getEmailSubmitted() {
    const emailSubmitted =
      await this.submittedFormValuesLocator("Email").textContent();
    return emailSubmitted;
  }

  private async getGenderSubmitted() {
    const genderSubmitted =
      await this.submittedFormValuesLocator("Gender").textContent();
    return genderSubmitted;
  }

  private async getMobileSubmitted() {
    const mobileSubmitted =
      await this.submittedFormValuesLocator("Mobile").textContent();
    return mobileSubmitted;
  }

  private async getHobbiesSubmitted() {
    const hobbiesSubmitted =
      await this.submittedFormValuesLocator("Hobbies").textContent();
    return hobbiesSubmitted;
  }

  private async getPictureSubmitted() {
    const pictureSubmitted =
      await this.submittedFormValuesLocator("Picture").textContent();
    return pictureSubmitted;
  }

  private async getAddressSubmitted() {
    const addressSubmitted =
      await this.submittedFormValuesLocator("Address").textContent();
    return addressSubmitted;
  }

  async submittedFormData() {
    const submittedFormData = {
      firstName: await this.getStudentNameSubmitted(),
      lastName: await this.getStudentLastNameSubmitted(),
      email: await this.getEmailSubmitted(),
      gender: await this.getGenderSubmitted(),
      mobile: await this.getMobileSubmitted(),
      dateOfBirth: await this.getdateOfBirthSubmitted(),
      subjects: await this.getSubjectSubmitted(),
      hobbies: await this.getHobbiesSubmitted(),
      picture: await this.getPictureSubmitted(),
      currentAddress: await this.getAddressSubmitted(),
    };
    return submittedFormData;
  }
}
