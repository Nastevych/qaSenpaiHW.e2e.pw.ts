import { test as base, ConsoleMessage } from "@playwright/test";
import { PracticeForm } from "./app/pages/PracticeForm";
import { PracticeFormSubmitted } from "./app/pages/PracticeFormSubmitted";
import { TextBox } from "./app/pages/TextBox";
import fs from "fs";
import { Books } from "./app/pages/Books";
import { Book } from "./app/pages/Book";

type Fixture = {
  practiceFormPage: PracticeForm;
  practiceFormSubmitted: PracticeFormSubmitted;
  textBox: TextBox;
  books: Books;
  book: Book;
};

export const test = base.extend<Fixture>({
  page: async ({ page }, use) => {
    await page.route(new RegExp("ad"), (route) => {
      route.abort();
    });

    page.on("console", async (msg: ConsoleMessage) => {
      if (msg.type() === "error") {
        const errorMessage = `${Date().toString()} - ${msg.text()}\n`;
        console.log(errorMessage);
        await fs.appendFileSync(
          "tests/15-hw/errors.txt",
          errorMessage,
          "utf-8"
        );
      }
    });

    await use(page);
  },

  practiceFormPage: async ({ page }, use) => {
    const practiceFormPage = new PracticeForm(page);

    await use(practiceFormPage);
  },

  practiceFormSubmitted: async ({ page }, use) => {
    const practiceFormSubmitted = new PracticeFormSubmitted(page);

    await use(practiceFormSubmitted);
  },

  textBox: async ({ page }, use) => {
    const textBox = new TextBox(page);

    await use(textBox);
  },

  books: async ({ page }, use) => {
    const books = new Books(page);

    await use(books);
  },

  book: async ({ page }, use) => {
    const book = new Book(page);

    await use(book);
  },
});
