"use server"

import { signIn } from "@/src/lib/auth/authConfig"

export const handleGoogleSignIn = async () => {
	try {
		await signIn("google", {
			redirectTo: "/dashboard",
		}).then((response) => {
			console.log(response)
		})
		console.log("hello")
	} catch (error) {
		throw error
	}
}
