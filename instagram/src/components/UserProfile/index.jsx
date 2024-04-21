import { useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import { getPhotosByUserId } from "../../services/firebase";
import { useReducer } from "react";
import Photos from "./Photos";

export default function UserProfile({ user: profileUser }) {
  const initialState = {
    profile: {},
    photos: [],
    followersCount: 0
  };
  
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [{ profile, photos, followersCount }, dispatch] = useReducer(
    reducer,
    initialState
  );


  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photosCollection = await getPhotosByUserId(profileUser.userId);
      dispatch({profile:profileUser, photos:photosCollection, followersCount:profileUser.followers.length})
    }
    getProfileInfoAndPhotos();
  }, [profileUser.username]);
  return (
    <>
      <ProfileHeader
        profile={profile}
        photosCount = {photos?.length}
        followersCount = {followersCount}
        setFollowersCount={dispatch}
    
      ></ProfileHeader>
      <hr className="bg-gray-200" />
      <Photos photos={photos}></Photos>
    </>
  );
}
