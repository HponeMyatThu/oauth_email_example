"use client"

import { handleGoogleSignIn } from "@/src/lib/auth/GoogleSignInServerAction"
import { FcGoogle } from "react-icons/fc"

const SignInTemplate: React.FC = () => {
	return (
		<div className="signin-page">
			<div className="signin-card">
				<h2>Sigin</h2>
				<div className="form-container">
					<div className="social-logins">
						<button
							className="google"
							onClick={() => handleGoogleSignIn()}
						>
							<FcGoogle className="google-icon" />
							Sign in with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignInTemplate
