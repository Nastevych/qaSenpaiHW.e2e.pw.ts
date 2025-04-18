import { expect, Page } from "@playwright/test";
import { test } from "./demoQaFixture.ts";

test("15-003 open book by title success", async ({ books, book }) => {
  await books.goToBooksPage();
  await books.openBookPageByTitle("Eloquent JavaScript, Second Edition");

  expect(await book.getBookPageURL()).toContain("/books?book=");
});
