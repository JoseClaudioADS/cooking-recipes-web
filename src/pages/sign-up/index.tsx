import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { signUp } from "@/services/api/api";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      setEmail(() => "");
      setFullName(() => "");
      toast({
        title: "Por favor cheque seu email para continuar com o login",
      });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "Algum erro aconteceu, tente novamente",
        variant: "destructive",
      });
    },
  });

  const handleSignUp = async () => {
    signUpMutation.mutate({
      name: fullName,
      email,
    });
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center flex-col">
        <p className="text-4xl font-bold tracking-tight text-primary mb-8">
          Cooking Recipes
        </p>
        <p className="mb-6 font-bold text-lg">Crie uma conta</p>
        <div className="flex flex-col space-y-8 w-full justify-center text-center items-center">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-md">
              Nome completo
            </Label>
            <Input
              id="fullName"
              className="border-2 rounded-3xl pt-5 pb-5 w-96 text-center"
              value={fullName}
              onChange={(e) => setFullName(() => e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-md">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="border-2 rounded-3xl pt-5 pb-5 w-96 text-center"
              value={email}
              onChange={(e) => setEmail(() => e.target.value)}
            />
          </div>
          <Button
            className="mt-10 font-bold text-lg rounded-3xl pr-6 pl-6"
            onClick={handleSignUp}
            disabled={signUpMutation.isPending}
          >
            Criar Conta
          </Button>
        </div>
        <p className="text-sm mt-6">
          Criando uma conta voce estará concordando com os{" "}
          <a href="#" className="underline text-primary">
            termos
          </a>{" "}
          de uso.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="w-4/5 h-2/3 bg-no-repeat bg-center rounded-3xl"
          style={{
            backgroundImage: `url(
              "https://source.unsplash.com/2wq0ReWAM8I/600x700"
            )`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 rounded-3xl">
            <p className="text-4xl font-bold text-white mb-8">
              Já tem uma conta?
            </p>
            <Link
              to="/sign-in"
              className="rounded-3xl bg-white hover:bg-secondary pl-8 p-2 pr-8 text-lg"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
