"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, AlertCircle } from "lucide-react";
import Logo from "@/components/ui/logo";
import { signIn } from "@/lib/auth";
import { SocialLogin } from "./SocialLogin";
import Link from "next/link";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    setIsVerificationSent(false);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const result = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setIsVerificationSent(true);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md relative z-10">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-2">
          <Logo />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome to Site Host
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-gray-600">
          The easiest way to deploy and manage your websites
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle className="text-xl font-bold mt-4">
          Login to you account
        </CardTitle>
        {isVerificationSent && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <p className="font-bold">Check your email</p>
            <p className="text-sm">
              A sign in link has been sent to your email address. Please check
              your email and click on the link to continue.
            </p>
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>{error}</span>
              </div>
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Sign Up with Email"}
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Social login buttons */}
        <SocialLogin />
      </CardContent>
      <CardFooter className="flex flex-col mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline hover:underline-offset-2"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
