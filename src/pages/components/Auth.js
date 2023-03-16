import React, {useEffect, useState} from "react";
import firebaseConfig from "./Firebase.js";
import Lode from "./Animation/Loading";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return(
     <Lode></Lode>
    );
  }
  return (
    <AuthContext.Provider value={{
      currentUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};