import "@/styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ThemeProvider>
  );
}
