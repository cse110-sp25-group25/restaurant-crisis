// db.js
import { getDatabase } from "firebase-admin/database";

const admin = await import("firebase-admin");
const serviceAccount = (await import("./restaurant-crisis-firebase-adminsdk-fbsvc-f10900cd57.json", { assert: { type: "json" } })).default;

admin.default.initializeApp({
  credential: admin.default.credential.cert(serviceAccount),
  databaseURL: "https://restaurant-crisis-default-rtdb.firebaseio.com"
});


const db = getDatabase();
export { db };
// Add a new restaurant with auto key
export async function addRestaurant(restaurantData) {
  const newRef = db.ref('restaurants').push();
  await newRef.set(restaurantData);
  console.log(`Added restaurant: ${newRef.key}`);
  return newRef.key;
}

// Add a new user
export async function addUser(userId, likedRestaurants = {}) {
    // Write the map/array itself, not an object with extra keys
    await db.ref(`users/${userId}`).set(likedRestaurants);
    console.log(`Added user: ${userId}`);
  }
  

// Delete a user
export async function deleteUser(userId) {
  await db.ref(`users/${userId}`).remove();
  console.log(`Deleted user: ${userId}`);
}

// Delete a restaurant
export async function deleteRestaurant(restaurantId) {
  await db.ref(`restaurants/${restaurantId}`).remove();
  console.log(`Deleted restaurant: ${restaurantId}`);
}
