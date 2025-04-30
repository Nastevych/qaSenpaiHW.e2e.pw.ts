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
    role: "adminadmin",
    pass: process.env.PASSWORD,
    email: "adminadmin@gg.com",
  },
  {
    role: "contentadminadmin",
    pass: process.env.PASSWORD,
    email: "contentadminadmin@gg.com",
  },
];
