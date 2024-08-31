import NextAuth from "next-auth"
import { prisma } from "../database"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Nodemailer from "next-auth/providers/nodemailer"

 
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter : PrismaAdapter(prisma),
  providers: [
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
],
secret : process.env.NEXTAUTH_SECRET,
pages: {
    signIn: '/login',   // Verifique se está correta  
    verifyRequest: '/login', // Onde é verificado 
    newUser: "/app",
  },
})
