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

export const newUserData = {
  username: faker.person.lastName(),
  email: faker.internet.email(),
  pass: faker.internet.password(),
};

export const usersData = [
  {
    role: "adminn",
    pass: process.env.PASSWORD,
    email: "borysss@gg.com",
  },
  {
    role: "contentadminn",
    pass: process.env.PASSWORD,
    email: "contentadminnn@gg.com",
  },
];
