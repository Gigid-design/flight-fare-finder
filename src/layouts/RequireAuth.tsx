import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthContext = { user: User };

// Client-side equivalent of the old `_authenticated` layout route's beforeLoad:
// resolve the Supabase user, redirect to /signin if absent, and expose the user
// to child routes via outlet context.
export function RequireAuth() {
  const [state, setState] = useState<
    { status: "loading" } | { status: "ready"; user: User | null }
  >({
    status: "loading",
  });

  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data, error }) => {
      if (active) setState({ status: "ready", user: error ? null : data.user });
    });
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;
      if (event === "SIGNED_OUT") setState({ status: "ready", user: null });
      else if (event === "SIGNED_IN" || event === "USER_UPDATED")
        setState({ status: "ready", user: session?.user ?? null });
    });
    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  if (state.status === "loading") return null;
  if (!state.user) return <Navigate to="/signin" replace />;
  return <Outlet context={{ user: state.user } satisfies AuthContext} />;
}

export function useAuthUser(): User {
  return useOutletContext<AuthContext>().user;
}
