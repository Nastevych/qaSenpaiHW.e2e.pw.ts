import { faker } from "@faker-js/faker";

export const newUseData = {
  username: faker.person.lastName(),
  email: faker.internet.email(),
  pass: faker.internet.password(),
};
