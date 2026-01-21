import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
  const [role, setRole] = useState("user")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (role === "admin") navigate("/admin")
    else navigate("/user")
  }

  return (
    <div className="container">
      <h2><u>Welcome To Job Seeker</u></h2>
      <h2>Login</h2>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={handleLogin}>Login</button>

      <p>New user? <a href="/register">Register</a></p>
    </div>
  )
}
