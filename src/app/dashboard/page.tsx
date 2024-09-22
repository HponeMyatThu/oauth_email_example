import { checkIsAuthenticated } from "@/src/lib/auth/CheckIsAuthenticated"
import DashboardTemplate from "@/src/template/dashboard/DashboardTemplate"
import { redirect } from "next/navigation"

const Dashboard: React.FC = async () => {
	const isAuthenticated = await checkIsAuthenticated()

	if (!isAuthenticated) {
		redirect("/auth/sign-in")
	} else {
		return <DashboardTemplate />
	}
}

export default Dashboard
