import nookies from "nookies"
import { useRouter } from "next/router"

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.token
  console.log(token)
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
