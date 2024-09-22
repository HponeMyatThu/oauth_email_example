import PostgresAdapter from "@auth/pg-adapter"
import NextAuth from "next-auth"
import { pool } from "@/src/lib/postgres"
import Google from "next-auth/providers/google"
import nodemailer from "next-auth/providers/nodemailer"
import { clearStaleTokens } from "./ClearStaleTokensServerAction"
import { setName } from "@/src/lib/auth/setNameServerAction"

export const { handlers, signIn, signOut, auth } = NextAuth({
	trustHost: true,
	adapter: PostgresAdapter(pool),
	secret: process.env.AUTH_SECRET,
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days in seconds (default value is 30 days)
	},
	pages: {
		signIn: "/auth/sign-in",
		error: "/auth/auth-error",
		verifyRequest: "/auth/auth-success",
	},
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),
		nodemailer({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: parseInt(process.env.EMAIL_SERVER_PORT!, 10),
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
	],
	callbacks: {
		async jwt({ token, user, session, trigger }) {
			if (trigger === "update" && session?.name! !== token?.name) {
				token.name = session.name
				try {
					await setName(token?.name!)
				} catch (error) {
					console.error("Failed to set user name:", error)
				}
			}
			if (user) {
				await clearStaleTokens()
				return {
					...token,
					id: user.id,
				}
			}
			return token
		},
		async session({ session, token }) {
			console.log("🚀 ~ session ~ { session, token }:", {
				session,
				token,
			})
			return {
				...session,
				user: {
					...session.user,
					id: token.id as string,
				},
			}
		},
	},
})
