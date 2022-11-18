import { useRouter } from "next/router"
import { useState } from "react"
import auth from "../src/service/auth/auth"
import nookies from "nookies"
import styles from "./login.module.css"

export default function HomeScreen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const login = {
      username: username,
      password: password
    }

    const exec = await auth(login)
    if(exec){
      sessionStorage.setItem("token", exec.data.access_token)
      const token = sessionStorage.getItem("token".toString())
      nookies.set(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      //nookies.set("refresh_token", exec.data.refresh_token, {
        //httpOnly: true,
        //sameSite: "lax" //somente o dominio que estamos terá acesso esse token
     //})
      //caso quisessemos usar apenas o cookie = nookies.set(null, "token", exec.data.access_token)
      router.push("/auth-page-ssr")
    }
} 
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <input
            className={styles.campos} placeholder="Usuário" name="usuario" value={username} onChange={(e) => setUsername(e.target.value)} 
          />
          <input
            className={styles.campos}  placeholder="Senha" name="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.btncontainer}>
            <input className={styles.btn} type="submit" value="Entrar"/>
          </div>
        </div>
      </form>
    </div>
  );
}
