import { useRouter } from "next/router";
import { useEffect } from "react";
import nookies from "nookies"

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
  
  const handleDelete = () => {
    sessionStorage.removeItem("token")
    nookies.destroy(null, "token")
    router.push("/")
  }

  return (
    <div>
      <h1>Client Side Validation </h1>
      <button onClick={handleDelete}>Logout</button>
    </div>
  )
}

export default AuthPageStatic;
