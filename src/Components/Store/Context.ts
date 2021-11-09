import { createContext, useContext, useState } from "react";

export type GlobalContent = {
    Id:string,
    setId:(c:string) => void
}
const initialState = {
  Id: "1",
  setId:() => {}
};
export const MyGlobalContext  = createContext<GlobalContent>(initialState);

export const useGlobalContext = () => useContext(MyGlobalContext);
