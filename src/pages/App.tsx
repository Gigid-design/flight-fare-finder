import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { Plane } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { useAuthUser } from "@/layouts/RequireAuth";
import { usePageMeta } from "@/hooks/use-page-meta";

export function AppPage() {
  usePageMeta({
    title: "Dashboard — Flight Fare Finder",
    description: "Your flight price tracking dashboard.",
  });
  const user = useAuthUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate("/signin", { replace: true });
  }

  return (
    <div className="min-h-screen">
      <SiteHeader
        right={
          <Button variant="secondary" onClick={signOut}>
            Sign out / 登出
          </Button>
        }
      />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative mx-auto max-w-3xl px-5 py-24">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hi {user.email}</h1>
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/60 p-8">
            <Plane className="mb-4 h-6 w-6 text-primary" />
            <p className="text-lg font-medium">
              你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Your dashboard is coming soon. Route-subscription will be added in the next milestone.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
