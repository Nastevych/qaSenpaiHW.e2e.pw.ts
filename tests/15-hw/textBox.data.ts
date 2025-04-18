import { fa, faker } from "@faker-js/faker";

export const formData = {
  fullName: faker.person.fullName(),
  email: faker.internet.email(),
  currentAddress: faker.location.street(),
  permanentAddress: faker.location.secondaryAddress(),
};
