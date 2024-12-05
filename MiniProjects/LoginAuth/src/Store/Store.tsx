import React, { createContext, useEffect, useState } from "react";
import { USER_CONTEXT_TYPE, USER_PROVIDER_TYPE, USERS } from "../Models/Types";
import { addUser } from "../Services/Services";

const UsersContext = createContext<USER_CONTEXT_TYPE | undefined>(undefined);

const UsersProvider: React.FC<USER_PROVIDER_TYPE> = ({ children }) => {
  const [user, setUser] = useState<USERS | undefined>(undefined);
  const [particularUser, setParticularUser] = useState<USERS | undefined>(
    undefined
  );
  useEffect(() => {
    if (user?.email !== undefined && user?.password !== undefined) {
      addUser(user);
    }
  }, [user]);
  return (
    <>
      <UsersContext.Provider
        value={{ user, setUser, particularUser, setParticularUser }}
      >
        {children}
      </UsersContext.Provider>
    </>
  );
};

export { UsersContext, UsersProvider };
