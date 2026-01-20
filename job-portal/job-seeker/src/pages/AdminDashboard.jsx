export default function AdminDashboard() {
  return (
    <>
      <header>
        <h2>Admin Dashboard</h2>
        <button onClick={() => window.location.href = "/"}>Logout</button>
      </header>

      <div className="dashboard">
        <h3>Job Requests</h3>

        <table>
          <tr>
            <th>User</th>
            <th>Job</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Rahul</td>
            <td>Frontend Developer</td>
            <td className="pending">Pending</td>
            <td>
              <button className="approve">Approve</button>
              <button className="reject">Reject</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}
