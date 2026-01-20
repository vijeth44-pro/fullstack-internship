export default function Register() {
  return (
    <div className="container">
      <h2>User Registration</h2>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Skills" />

      <button>Register</button>
      <p><a href="/">Back to Login</a></p>
    </div>
  )
}
