import nookies from "nookies"

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.token
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
        props: { }, // will be passed to the page component as props
     }
    } catch(err) {
      console.log(err)
    }
}

function AuthPageSSR() {
  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
    </div>
  )
}

export default AuthPageSSR;
