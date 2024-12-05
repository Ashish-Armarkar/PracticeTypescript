import { ReactNode, SetStateAction, Dispatch } from "react";

export interface USERS {
    id: string;
    email: string;
    password: string;
  }
  

  export interface USER_PROVIDER_TYPE{
    children : ReactNode
  }

  export interface USER_CONTEXT_TYPE{
    user: USERS | undefined;
    setUser : Dispatch<SetStateAction<USERS | undefined>>;
    particularUser ?: USERS | undefined;
    setParticularUser ? : Dispatch<SetStateAction<USERS | undefined>>;

}