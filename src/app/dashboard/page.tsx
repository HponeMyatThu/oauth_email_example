import DashboardTemplate from "@/src/template/dashboard/DashboardTemplate"
import { redirect } from "next/navigation"

const Dashboard: React.FC = () => {
	// TODO: check if user is authenticated or not
	const isAuthenticated = false
	//const isAuthenticated = await checkIsAuthenticated();

	if (isAuthenticated) {
		redirect("/auth/sign-in")
	} else {
		return <DashboardTemplate />
	}
}

export default Dashboard
