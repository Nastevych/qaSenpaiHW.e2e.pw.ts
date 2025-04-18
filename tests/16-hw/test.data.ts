import { faker } from "@faker-js/faker";

export const testArticleData = {
  title: faker.commerce.productName(),
  description: faker.commerce.productMaterial(),
  body: faker.commerce.productDescription(),
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
