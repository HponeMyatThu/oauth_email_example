"use server"

import { signIn } from "@/src/lib/auth/authConfig"

export const handleFacebookSignIn = async () => {
	try {
		await signIn("facebook", {
			redirectTo: "/dashboard",
		})
	} catch (error) {
		throw error
	}
}
