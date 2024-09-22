import { checkIsAuthenticated } from "@/src/lib/auth/CheckIsAuthenticated"
import SignInTemplate from "@/src/template/auth/sign-in/SignInTemplate"
import { redirect } from "next/navigation"

const SignIn: React.FC = async () => {
	const isAuthenticated = await checkIsAuthenticated()

	if (isAuthenticated) {
		redirect("/dashboard")
	} else {
		return <SignInTemplate />
	}
}

export default SignIn
