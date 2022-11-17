import nookies from "nookies"
import { useRouter } from "next/router"

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.token
  //const refreshToken = cookies.refresh_token
  await fetch("http://localhost:4000/api/session", {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    try{
      if(!token) {
        return {
          redirect: {
            permanent: false,
            destination: '/'
          }
        }
      }
      return {
        props: { token }, // will be passed to the page component as props
     }
    } catch(err) {
      console.log(err)
    }
}

function AuthPageSSR({token}) {
  const tokenHere = token
  const router = useRouter()

  const handleDelete = () => {
    sessionStorage.removeItem("token")
    nookies.destroy(null, "token")
    router.push("/")
  }
  
  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <p>token: {tokenHere}</p>
      <button onClick={handleDelete}>Logout</button>
    </div>
  )
}

export default AuthPageSSR;
