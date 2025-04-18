import { expect } from "@playwright/test";
import { test } from "./demoQaFixture.ts";
import { userData } from "./practiceForm.data.ts";

test("15-001 practice form submit success", async ({
  practiceFormPage,
  practiceFormSubmitted,
}) => {
  await practiceFormPage.setPracticeForm(userData);
  await practiceFormPage.submitPracticeForm();

  expect(await practiceFormSubmitted.submittedFormData()).toEqual(userData);
});
