import { AuthForm } from "@/components/AuthForm";
import { usePageMeta } from "@/hooks/use-page-meta";

export function SignUpPage() {
  usePageMeta({
    title: "Sign up — Flight Fare Finder",
    description: "Create an account to get emailed when fares drop.",
  });
  return <AuthForm mode="signup" />;
}
