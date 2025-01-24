import { faker, SexType } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

export interface Person {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  }
  address: string;
  city: string;
  state: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
}

function createRandomUser(): Person {
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    name: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

// Function to create an array of users
function createRandomUsers(count: number): Person[] {
  const users: Person[] = [];
  for (let i = 0; i < count; i++) {
    users.push(createRandomUser());
  }
  return users;
}

// Create an array of n users
export const users = createRandomUsers(10);
