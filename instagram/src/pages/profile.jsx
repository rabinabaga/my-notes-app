import { useEffect } from "react";
import { getUserByUsername } from "../services/firebase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useState } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";

export default function Profile() {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // dateCreated: 1711102863017;
  // docId
  // :
  // "wWZoRNnhs2kSCbcUz5vm"
  // emailAddress
  // :
  // "karlhadwen@gmail.com"
  // followers
  // :
  // []
  // following
  // :
  // (2) ['2', '3']
  // fullName
  // :
  // "Karl Hadwen"
  // userId
  // :
  // "29TeZRToX7MZuo1PlbygLT5SRTm2"
  // username
  // :
  // "karl"
  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
        setUserExists(true);
      } else {
        setUserExists(false);
        navigate(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, navigate]);
  return user ? (
    <div className="bg-gray-background">
      <Header></Header>
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user}></UserProfile>
      </div>
    </div>
  ) : null;
}
