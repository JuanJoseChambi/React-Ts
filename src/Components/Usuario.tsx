import { useState } from "react"

interface User {
    uid: string,
    name: string
}

// const userTemporal :User = {
//     uid:"X5ss",
//     name: "flore"
// }

function Usuario() {
    // const [user, setUser] = useState<User>({
    //     uid: "das",
    //     name:"Ana"
    // })
    // const [user, setUser] = useState<User>(userTemporal)
    const [user, setUser] = useState<User>()

    function login () {
        setUser({
            uid: "adasd",
            name: "Juan Jose"
        })
    }

  return (
    <div className="mt-5">
        <h3>Usaurio</h3>
        <button onClick={login} className="btn btn-outline-primary">Login</button>
        {
            !user?  <pre>No Hay Usuario</pre> :  <pre>{JSON.stringify(user)}</pre>
        }
    </div>
  )
}

export default Usuario