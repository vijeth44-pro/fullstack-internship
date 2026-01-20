export default function UserDashboard() {
  return (
    <>
      <header>
        <h2>User Dashboard</h2>
        <button onClick={() => window.location.href = "/"}>Logout</button>
      </header>

      <div className="dashboard">
        <h3>Available Jobs</h3>

        <div className="job-card">
          <h4>Frontend Developer</h4>
          <p>Company: ABC Tech</p>
          <p>Category: IT</p>
          <button>Request Job</button>
          <button className="save">Save</button>
        </div>

        <h3>Your Job Requests</h3>

        <table>
          <tr>
            <th>Job</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Frontend Developer</td>
            <td className="pending">Pending</td>
            <td><button className="cancel">Cancel</button></td>
          </tr>
        </table>
      </div>
    </>
  )
}
