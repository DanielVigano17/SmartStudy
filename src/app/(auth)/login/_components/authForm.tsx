"use client"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import actionLogin from "../action/actionLogin"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function AuthForm() {
  const { toast } = useToast()
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) =>
  {
    console.log(data)
    await actionLogin(data.email);

    toast({
      title: "Magic Link enviado para seu email",
      description: "Vá para sua caixa de email e faça login através do link",
      action: (
        <ToastAction altText="Confirmar">Ok</ToastAction>
      )
    })

  });
   
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Entre na sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link href="#" className="font-medium text-primary hover:text-primary/80" prefetch={false}>
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                type="email"
                {... form.register("email")}
                autoComplete="email"
                required
                className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                placeholder="seuemail@exemplo.com"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}