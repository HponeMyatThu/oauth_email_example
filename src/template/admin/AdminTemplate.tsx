const AdminTemplate: React.FC = () => {
	return (
		<div className="admin-page">
			<h2>Admin Page</h2>
			<p>This Page is only accessible to users with the ADMIN role</p>
			<a href="/dashboard">Go to Dashboard</a>
		</div>
	)
}

export default AdminTemplate
