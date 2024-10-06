import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

export const authOptions:AuthOptions = {

  pages:{
    signIn: "/"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID !,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET  as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ]
   
}