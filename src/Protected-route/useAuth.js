import { useState } from "react";

function useAuth(initialValues)
{
 let[isAuth,setIsAuth]=useState(initialValues);
 let login=()=>{
setIsAuth(true);
 }
 let logout=()=>{
  setIsAuth(false);
 }
 return[isAuth,login,logout]
}

export default useAuth