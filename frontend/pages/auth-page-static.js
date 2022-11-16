import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//via client side

function getToken(){
  const token = sessionStorage.getItem("token".toString())
  return token
}

function AuthPageStatic() {
  const router = useRouter()
  
  useEffect(() => {
    const token = getToken()
    if(token){
      console.log("Bem vindo")
    } else {
      router.push("/")
    }
  },[getToken])
  
  return (
    <div>
      <h1>teste</h1>
    </div>
  )
}

export default AuthPageStatic;
