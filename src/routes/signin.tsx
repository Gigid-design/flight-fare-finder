import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Flight Fare Finder" },
      { name: "description", content: "Sign in to manage your flight price alerts." },
      { property: "og:title", content: "Sign in — Flight Fare Finder" },
      { property: "og:description", content: "Sign in to manage your flight price alerts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <AuthForm mode="signin" />,
});
