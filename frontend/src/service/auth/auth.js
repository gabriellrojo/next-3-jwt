export default async function auth(login){

    const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(login)
    })

    try {
        const resFinal = await res.json()
        if(resFinal.error){
            console.log("Usuário ou senha incorretos")
            return
        }
        return resFinal
    } catch(err) {
        console.log(err)
    }
    
}
