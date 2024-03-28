import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  console.log("username", username);
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

    //this gives array of users and to get the contents of each user, data() function
  return result.docs.length > 0;
}

export async function getUserObjByUserId(userId){
  const result = await firebase.firestore().collection('users').where('userId','==',userId).get();
  const user = result.docs.map((item) => ({...item.data(),docId:item.id}));
//this is an array
  return user;
}