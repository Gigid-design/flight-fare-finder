import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";

import { routes } from "@/router";

// Match routes without rendering: the auth guard would hit Supabase, and jsdom
// never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(["/", "/signin", "/signup", "/app"])(
    "resolves %s to a real page, not the 404",
    (path) => {
      const matches = matchRoutes(routes, path);
      expect(matches).not.toBeNull();
      expect(matches!.at(-1)?.route.path).not.toBe("*");
    },
  );

  it("falls back to the 404 route for unknown paths", () => {
    const matches = matchRoutes(routes, "/does-not-exist");
    expect(matches!.at(-1)?.route.path).toBe("*");
  });
});
