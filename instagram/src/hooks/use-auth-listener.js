import { useContext } from "react";
import FirebaseContext from "../context/firebase";
import { useEffect } from "react";
import { useState } from "react";

//listens to when user logs in and logs out
export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const {firebase} = useContext(FirebaseContext)

    useEffect(()=>{ 

        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            //we have a user therefore we can store the user in localStorage
            if(authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            }else{
                //we dont have an authuser, therefore clear the storage
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        return () => listener();
    },[firebase])
    return {user};
}

 ;