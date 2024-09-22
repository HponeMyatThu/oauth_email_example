"use server"

import { signIn } from "@/src/lib/auth/authConfig"

export const handleEmailSignIn = async (email: string) => {
	try {
		await signIn("nodemailer", {
			email,
			callbackUrl: "/dashboard",
		})
		console.log("hello")
	} catch (error) {
		throw error
	}
}
