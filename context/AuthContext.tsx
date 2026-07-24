"use client";
import { me } from "@/actions/auth";
import { createContext, useEffect, useState } from "react";

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkUserLoggedIN = async () => {
      const data = await me();
      if(data?.error){
        setUser(null)
      }else{
        setUser(data.user)
      }
    };
    checkUserLoggedIN();
  }, []);
  const loginContext = (user) => {
    return setUser(user);
  };
  return (
    <Authcontext.Provider value={{ user, loginContext }}>
      {children}
    </Authcontext.Provider>
  );
};
export default Authcontext;
