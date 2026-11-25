import { useState } from 'react'

function Login() {

const [role, setRole] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
function print(e) {e.preventDefault()
console.log("Role: ", role)
console.log("Email: ", email)
console.log("Password: ", password)
}
return (
    <>

    <h1>Sports Management System</h1>
<br />
<div>
<form onSubmit={print}>
<label>Email :</label>
<input
            placeholder="Enter your email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

    <br /><br />
<label>Password :</label>
<input placeholder="Enter your password" required type="password"
value={password} onChange={(e) => setPassword(e.target.value)}/>
<br /><br />
<button type="submit">submit</button>
</form>
</div>
</>
)
}

export default Login