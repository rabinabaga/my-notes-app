import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  //this gives array of users and to get the contents of each user, data() function
  return result.docs.length > 0;
}

export async function getUserObjByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({ ...item.data(), docId: item.id }));
  //this is an array
  return user;
}

export async function getSuggestedProfiles({ userId, following }) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  const profilesArray = result.docs
    .map((item) => ({ ...item.data(), docId: item.id }))
    .filter((profile) => {
      return profile.userId !== userId && !following?.includes(profile.userId);
    });

  return profilesArray;
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, //currently logged in user document id ( karl's profile )
  profileId, //the doc id of user that karl requests to follow
  isFollowingProfile //true or false, am i currently following this person
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserId)
        : FieldValue.arrayUnion(loggedInUserId),
    });
}

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }

      //photo.userId = 2
      const user = await getUserObjByUserId(photo.userId);
      //raphael
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}

export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  //this gives array of users and to get the contents of each user, data() function
}

export async function getPhotosByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", userId)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  //this gives array of users and to get the contents of each user, data() function
}

export async function toggleFollow(
  userDocId,
  profileDocId,
  userUserId,
  profileUserId,
  followingProfile
) {
  await updateLoggedInUserFollowing(userDocId, profileUserId, followingProfile);
  await updateFollowedUserFollowers(profileDocId, userUserId, followingProfile);
}
