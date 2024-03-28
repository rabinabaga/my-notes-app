import { useContext } from "react";
import UserContext from "../context/user";
import { useEffect } from "react";
import { useState } from "react";
import { getUserObjByUserId } from "../services/firebase";

export default function () {
  const [activeUser, setActiveUser] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjWithUserId() {
      const [response] = await getUserObjByUserId(user?.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjWithUserId();
    }
  }, [user]);
  return { user: activeUser };
}
