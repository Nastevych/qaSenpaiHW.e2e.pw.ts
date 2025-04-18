import { expect } from "@playwright/test";
import { test } from "./demoQaFixture.ts";
import { formData } from "./textBox.data.ts";

test(`15-002 Success text form fill`, async ({ textBox }) => {
  await textBox.setTextBoxForm(formData);
  await textBox.submitForm();

  expect(await textBox.submittedTextBoxForm()).toEqual(formData);
});
