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

export const newUseData = {
  username: faker.person.lastName(),
  email: faker.internet.email(),
  pass: faker.internet.password(),
};

export const usersData = {
  admin: {
    pass: "borys",
    email: "borys@gg.com",
  },

  contentAdmin: {
    pass: "contentadmin",
    email: "contentadmin@gg.com",
  },
};
