import React, {
  Fragment,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import Notification from "../helpers/Notifications.jsx";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const logOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const login = async (user) => {
    try {
      const result = await fetch("http://127.0.0.1:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());

      if (result.error) {
        setNotify({
          isOpen: true,
          message: result.error,
          type: "error",
        });
        return;
      }

      setNotify({
        isOpen: true,
        message: "Inicio sesion correctamente",
        type: "success",
      });
      setCurrentUser(result.user);

      localStorage.setItem("token", result.access_token);

      if (!result.user.accept_terms_and_conditions) {
        navigate("termnsandconditions");
        return;
      }

      navigate("dashboard/cadets");
    } catch (error) {
      setNotify({
        isOpen: true,
        message: error,
        type: "error",
      });
    }
  };

  const values = {
    currentUser,
    login,
    logOut,
  };

  return (
    <Fragment>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </Fragment>
  );
};

export default AuthProvider;
