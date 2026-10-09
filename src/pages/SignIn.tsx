import { AuthForm } from "@/components/AuthForm";
import { usePageMeta } from "@/hooks/use-page-meta";

export function SignInPage() {
  usePageMeta({
    title: "Sign in — Flight Fare Finder",
    description: "Sign in to manage your flight price alerts.",
  });
  return <AuthForm mode="signin" />;
}
