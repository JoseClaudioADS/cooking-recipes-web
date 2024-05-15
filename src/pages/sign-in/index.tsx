import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { requestMagicLink } from "@/services/api/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function SignIn() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const requestMagicLinkMutation = useMutation({
    mutationFn: requestMagicLink,
    onSuccess: () => {
      setEmail(() => "");
      toast({
        title: "Please check your email to continue the sign in process",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const handleRequestMagicLink = async () => {
    requestMagicLinkMutation.mutate(email);
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center flex-col">
        <p className="text-4xl font-bold tracking-tight text-primary mb-8">
          Cooking Recipes
        </p>
        <p className="mb-6 font-bold text-lg">Sign In to Cooking Recipes</p>
        <Label className="mb-2" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          className="w-1/2 border-2 rounded-3xl text-center pt-5 pb-5"
          value={email}
          onChange={(e) => setEmail(() => e.target.value)}
        />
        <Button
          className="mt-6 font-bold text-lg rounded-3xl pr-6 pl-6"
          onClick={handleRequestMagicLink}
          disabled={requestMagicLinkMutation.isPending}
        >
          Sign In
        </Button>
      </div>
      <div className="flex items-center justify-center bg-secondary">
        Sign Up Info
      </div>
    </div>
  );
}
