import { Link } from "react-router";
import { Radar, BellRing, CircleSlash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { useReveal } from "@/hooks/use-reveal";
import { usePageMeta } from "@/hooks/use-page-meta";

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    en: "Always-on route watching",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    en: "Target-price email alerts",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CircleSlash,
    title: "隨時取消",
    en: "Cancel anytime",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

export function IndexPage() {
  usePageMeta({
    title: "Flight Fare Finder — 機票降價通知",
    description:
      "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.",
    twitterCard: "summary_large_image",
  });
  useReveal();
  return (
    <div className="min-h-screen">
      <SiteHeader
        right={
          <Button asChild className="shadow-glow">
            <Link to="/signin">Sign in / 登入</Link>
          </Button>
        }
      />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-glow" />
          <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-24 text-center sm:pt-32">
            <p className="reveal mb-6 inline-block rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              TPE → NRT · HND · ICN
            </p>
            <h1 className="reveal text-gradient text-5xl font-extrabold tracking-tight sm:text-7xl">
              Flight Fare Finder
            </h1>
            <p className="reveal mt-6 text-xl font-semibold sm:text-2xl">
              設定航線與目標價，機票降價就通知你
            </p>
            <p className="reveal mt-3 text-muted-foreground">
              Set a route and a target price — we email you when the fare drops.
            </p>
            <div className="reveal mt-10 flex justify-center gap-3">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/signup">免費開始 Get started</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-28">
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.en}
                className="reveal rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">
                  {f.title} <span className="text-muted-foreground font-normal">({f.en})</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Flight Fare Finder
      </footer>
    </div>
  );
}
