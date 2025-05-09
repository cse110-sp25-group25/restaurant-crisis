// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, get, set, push, child, update } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8tfcv5B_k3vNTN1N4B4WfCWsxViLXPuQ",
  authDomain: "restaurant-crisis.firebaseapp.com",
  databaseURL: "https://restaurant-crisis-default-rtdb.firebaseio.com",
  projectId: "restaurant-crisis",
  storageBucket: "restaurant-crisis.firebasestorage.app",
  messagingSenderId: "94541155954",
  appId: "1:94541155954:web:2a887a27beeb862803bceb",
  measurementId: "G-M49XRHNZKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
//const analytics = getAnalytics(app);
get(ref(db, 'restaurants')).then(snapshot => console.log(snapshot.val()));
// Fetch all restaurants
export async function getRestaurants() {
    const snapshot = await get(ref(db, 'restaurants'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).map(([id, val]) => ({ id, ...val }));
    } else {
      return [];
    }
  }

  export async function getRestaurantById(restaurantId) {
    const snapshot = await get(ref(db, `restaurants/${restaurantId}`));
    if (snapshot.exists()) {
      return { id: restaurantId, ...snapshot.val() };
    } else {
      return null;
    }
  }
  
  export async function saveLikedRestaurant(userId, restaurantId) {
    await set(ref(db, `users/${userId}/likedRestaurants/${restaurantId}`), true);
  }

  export async function getLikedRestaurants(userId) {
    const snapshot = await get(ref(db, `users/${userId}/acceptedRestaurants`));
    if (snapshot.exists()) {
      return Object.keys(snapshot.val());
    } else {
      return [];
    }
  }
  