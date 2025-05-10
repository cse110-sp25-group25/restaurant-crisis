import { addRestaurant, addUser, db } from '../src/db.js';

let newRestaurantId;
const testUserId = 'jest-test-user';
const testRestaurantData = {
  name: 'Jest Burger',
  cuisine: ['American'],
  stars: 4.2,
  navLink: 'https://maps.google.com/?q=Jest+Burger',
  phone: '+1-555-000-9999',
  hours: 'Mon-Sun 10:00am - 10:00pm',
  address: '999 Jest Ave, Test City',
  images: ['https://example.com/jest-burger.jpg']
};

test('adds a new user', async () => {
    const liked = ['abc', 'def'];
    await addUser(testUserId, liked);
  
    const snap = await db.ref(`users/${testUserId}`).once('value');
    const userData = Object.values(snap.val() ?? {});  
  
    expect(userData).toEqual(liked);
  });
  

test('adds a new restaurant', async () => {
    newRestaurantId = await addRestaurant(testRestaurantData);

    const snapshot = await db.ref(`restaurants/${newRestaurantId}`).once('value');
    const data = snapshot.val();

    expect(data.name).toBe('Jest Burger');
    expect(data.cuisine).toContain('American');
  });

  afterAll(async () => {
    // Clean up test data
    await db.ref(`users/${testUserId}`).remove();
    if (newRestaurantId) {
      await db.ref(`restaurants/${newRestaurantId}`).remove();
    }
  });
