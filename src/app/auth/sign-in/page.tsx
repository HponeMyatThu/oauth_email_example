import SignInTemplate from "@/src/template/auth/sign-in/SignInTemplate"
import { redirect } from "next/navigation"

const SignIn: React.FC = async () => {
	// TODO: check if user is authenticated or not
	const isAuthenticated = false
	//const isAuthenticated = await checkIsAuthenticated();

	if (isAuthenticated) {
		redirect("/dashboard")
	} else {
		return <SignInTemplate />
	}
}

export default SignIn
