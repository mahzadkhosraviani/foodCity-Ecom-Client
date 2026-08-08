"use client";
import { me } from "@/actions/auth";
import type { User } from "@/types";
import { createContext, useEffect, useState } from "react";
type AuthContextType = {
  user: User | null;
  loginContext: (user: User) => void;
  logoutContext: () => void;
};
type Props = {
  children: React.ReactNode;
};
const Authcontext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }:Props) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const checkUserLoggedIN = async () => {
      const data = await me();
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
    };
    checkUserLoggedIN();
  }, []);
  const loginContext = (user:User) => {
    return setUser(user);
  };
  const logoutContext = () => {
    return setUser(null);
  };
  return (
    <Authcontext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </Authcontext.Provider>
  );
};
export default Authcontext;
