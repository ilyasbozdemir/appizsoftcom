import { withAuth } from "next-auth/middleware"
import { authOptions } from "./pages/api/auth/[...nextauth]";
// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  jwt: { decode: authOptions.jwt },
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === "/admin") {
        return token?.userRole === "admin"
      }
      return !!token
    },
  },
})

export const config = { matcher: ["/admin"] }