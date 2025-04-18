import { Locator, Page } from "@playwright/test";

export class TextBox {
  private page: Page;
  private inputFieldByIdLocator: (id: string) => Locator;
  private outputFieldByIdLocator: (id: string) => Locator;
  private submitButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputFieldByIdLocator = (id: string) => page.locator(`#${id}`);
    this.outputFieldByIdLocator = (id: string) =>
      page.locator(`//*[@id = "${id}" and @class = "mb-1"]`);
    this.submitButtonLocator = this.page.locator("#submit");
  }

  async goToTextBoxPage() {
    await this.page.goto("https://demoqa.com/text-box");
  }

  private async setUerName(userName: string = "") {
    await this.inputFieldByIdLocator("userName").fill(userName);
  }

  private async setUserEmail(userEmail: string = "") {
    await this.inputFieldByIdLocator("userEmail").fill(userEmail);
  }

  private async setCurrentAddress(currentAddress: string = "") {
    await this.inputFieldByIdLocator("currentAddress").fill(currentAddress);
  }

  private async setPermanentAddress(permanentAddress: string = "") {
    await this.inputFieldByIdLocator("permanentAddress").fill(permanentAddress);
  }

  private async getOutputField(id: string) {
    const result = await this.outputFieldByIdLocator(id).textContent();
    return result?.split(":")[1].trim();
  }

  async setTextBoxForm(formData: {
    fullName?: string;
    email?: string;
    currentAddress?: string;
    permanentAddress?: string;
  }) {
    await this.goToTextBoxPage();
    await this.setUerName(formData.fullName);
    await this.setUserEmail(formData.email);
    await this.setCurrentAddress(formData.currentAddress);
    await this.setPermanentAddress(formData.permanentAddress);
  }

  async submitForm() {
    await this.submitButtonLocator.click();
  }

  async submittedTextBoxForm() {
    const outputData = {
      fullName: await this.getOutputField("name"),
      email: await this.getOutputField("email"),
      currentAddress: await this.getOutputField("currentAddress"),
      permanentAddress: await this.getOutputField("permanentAddress"),
    };

    return outputData;
  }
}
