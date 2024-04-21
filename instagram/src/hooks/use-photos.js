import { useEffect } from "react";
import { getUserObjByUserId, getPhotos } from "../services/firebase";
import { useContext } from "react";
import UserContext from "../context/user";
import { useState } from "react";

export default function usePhotos() {
  const [photos, setPhotos] = useState([]);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const usersFollowing = await getUserObjByUserId(userId);
      const { following } = usersFollowing[0];
      let followedUserPhotos = [];

      //does the user acutally follow people
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    getTimelinePhotos();
  }, [userId]);

  return { photos };
}
