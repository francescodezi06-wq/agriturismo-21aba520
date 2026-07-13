import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-wood-dark">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-wood-dark">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">La pagina che cerchi non esiste o è stata spostata.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-sm bg-olive px-6 py-3 text-sm uppercase tracking-wider text-cream transition hover:bg-olive-dark">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-wood-dark">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">Riprova tra qualche istante o torna alla home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-sm bg-olive px-6 py-3 text-sm uppercase tracking-wider text-cream transition hover:bg-olive-dark"
          >
            Riprova
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-sm border border-wood-dark px-6 py-3 text-sm uppercase tracking-wider text-wood-dark transition hover:bg-wood-dark hover:text-cream">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Azienda Agricola La Corte · Muggiano, Milano" },
      { name: "description", content: "Antica corte lombarda del 1800 nel Parco Agricolo Sud di Milano. Ospitalità autentica, cucina di famiglia e prodotti della nostra terra." },
      { name: "author", content: "Azienda Agricola La Corte" },
      { property: "og:title", content: "Azienda Agricola La Corte · Muggiano, Milano" },
      { property: "og:description", content: "Antica corte lombarda del 1800 nel Parco Agricolo Sud di Milano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </QueryClientProvider>
  );
}
