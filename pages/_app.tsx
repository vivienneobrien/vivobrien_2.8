import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NavBar } from "./components/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar />
      <Component />
    </ThemeProvider>
  );
}
