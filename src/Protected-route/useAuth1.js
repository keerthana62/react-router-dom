import { useState } from "react";

function UseAuth1(initialValues)
{
 let[isAuth1,setIsAuth1]=useState(initialValues);
 let adminlogin=()=>{
setIsAuth1(true);
 }
 let adminlogout=()=>{
  setIsAuth1(false);
 }
 return[isAuth1,adminlogin,adminlogout]
}

export default UseAuth1