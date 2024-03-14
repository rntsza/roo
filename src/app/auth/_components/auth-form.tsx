"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast";
export function AuthForm() {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    try {
        await signIn('nodemailer', {email: data.email, redirect: false})
        toast({
            title: 'Magic Link Enviado',
            description: 'Verifique o seu e-mail para fazer o login'
        })
    } catch (error) {
        toast({
            title: 'Erro',
            description: 'Ocorreu um erro. Por favor, tente novamente.'
        })
    }
    
  });
  return (
    <div className="px-4">
      <div className="flex flex-col items-center space-y-4 min-h-screen justify-center py-10 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Magic Link</h1>
          <p className="text-gray-500">
            Insira o seu e-mail para receber o magic link
          </p>
        </div>
        <div className="w-full max-w-sm space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register('email')}
              />
            </div>
            <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Enviando' : 'Enviar Magic Link' }
            </Button>
          </form>
          <div className="space-y-2">
          </div>
        </div>
      </div>
    </div>
  );
}
