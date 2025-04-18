import { faker } from "@faker-js/faker";

const genders = ["Male", "Female", "Other"];
const subjects = ["Chemistry", "Hindi", "Accounting", "Computer Science"];
const hobbies = ["Sports", "Reading", "Music"];

export const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: genders[faker.number.int({ min: 0, max: genders.length - 1 })],
  mobile: faker.number.int({ min: 1000000000, max: 9999999999 }).toString(),
  dateOfBirth: faker.date
    .birthdate({ min: 18, max: 65, mode: "age" })
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  subjects: [subjects[0], subjects[3]],
  hobbies: hobbies[faker.number.int({ min: 0, max: hobbies.length - 1 })],
  picture: "test_picture.png",
  currentAddress: faker.location.streetAddress(),
};
