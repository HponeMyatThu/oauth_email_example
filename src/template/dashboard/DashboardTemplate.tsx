import { SignOutButton } from "@/src/components/sign-out-button"

const DashboardTemplate: React.FC = () => {
	return (
		<div className="dashboard-page">
			<h2>Dashboard Template</h2>
			<div className="dashboard-card">
				<SignOutButton className="signout-button" />
			</div>
		</div>
	)
}

export default DashboardTemplate
