
import { useState } from 'react'

function Login() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function print(e) {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)
}
return (
    <>
    <h1>Sports Management System</h1>
    <h2>Login Page</h2>
    <form onSubmit={print}>
    <label>Email:</label>
    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <br /><br />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br /><br />
        <button type="submit">Login</button>
    </form>
    </>
)
}
export default Login
