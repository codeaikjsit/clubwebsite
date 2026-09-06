import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import CodeAIShell from "./components/CodeAIShell";
import About from "./pages/About";
import Hackathon from "./pages/Hackathon";
import Home from "./pages/Home";
import Events from "./pages/Events";

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return (
    <WouterRouter base={baseUrl}>
      <CodeAIShell>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/hackathon" component={Hackathon} />
          <Route path="/about" component={About} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </CodeAIShell>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}
