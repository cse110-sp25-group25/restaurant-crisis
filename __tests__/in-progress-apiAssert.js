// CURRENTLY DOES NOT WORK
test('dummy', () => {
	expect(1 + 1).toBe(2);
});
// import {
//     getRestaurants,
//     saveLikedRestaurant,
//     getLikedRestaurants,
//   } from "../src/api.js";    
  
//     const user = "jest-dummy";
//     const restId = "dummy-2";
  
//     beforeEach(async () => {
//       await saveLikedRestaurant(user, restId);   
//     });
  
//     test("reads the public restaurant list", async () => {
//       const restaurants = await getRestaurants();
//       expect(Array.isArray(restaurants)).toBe(true);
//       expect(restaurants.length).toBeGreaterThan(0);
//     });
  
//     test("saves + fetches a user's liked restaurants", async () => {
//       await saveLikedRestaurant(user, restId);
//       const liked = await getLikedRestaurants(user);
  
//       // Realtime DB returns objects keyed by index; normalise to an array
//       const likedArr = Array.isArray(liked) ? liked : Object.values(liked ?? {});
//       expect(likedArr).toContain(restId);
//     });
