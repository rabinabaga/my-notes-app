import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import "./index.css";
import SignUp from "./pages/sign-up.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Notfound from "./pages/not-found.jsx";
import useAuthListener from "./hooks/use-auth-listener.js";
import UserContext from "./context/user.js"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    element: <Notfound />,
  },
]);
function App() {
    
  const { user } = useAuthListener();
  return (
    <>
   
      <UserContext.Provider
        value={{ user }} // Access FieldValue directly
      >
         <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
