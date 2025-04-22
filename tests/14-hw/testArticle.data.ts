import { faker } from "@faker-js/faker";

export const testArticleData = {
  title: faker.commerce.productName(),
  description: faker.commerce.productMaterial(),
  body: faker.commerce.productDescription(),
};

export const testEditedArticleData = {
  title: faker.commerce.productName(),
  description: faker.commerce.productMaterial(),
  body: faker.commerce.productDescription(),
};
