import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from 'react-bootstrap';
import type { Route } from "./+types/root";

// Importar Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (error instanceof Error) {
    message = error.message;
    stack = error.stack;
  } else if (typeof error === "string") {
    details = error;
  }

  return (
    <main className="container pt-5 text-center">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="text-start overflow-auto p-4 bg-light rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}