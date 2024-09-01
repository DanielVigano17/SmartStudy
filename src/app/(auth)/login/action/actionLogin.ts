"use server"

import { signIn } from "@/app/services/auth"

export default async function actionLogin(email : string)
   {
      try
      {
        await signIn("nodemailer", {email : email, redirectTo : "/intern/home"});
        
      }
      catch(error)
      {
      console.log(error);
      }
   }