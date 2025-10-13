import { useContext } from "react";
import UsersContext from "../context/UsersContext";

export const useUsers = () => {
  const context = useContext(UsersContext)

  if (context === undefined){
    throw new Error('UsersContext no puede usar fuera del userProvider')
  }

  return context
}