import { useState } from "react"
import auth from "../src/service/auth/auth"

export default function HomeScreen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const login = {
      username: username,
      password: password
    }

    const exec = await auth(login)
    if(exec){
      console.log(exec.data.access_token)
    }
} 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário" name="usuario" value={username} onChange={(e) => setUsername(e.target.value)} 
        />
        <input
          placeholder="Senha" name="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
