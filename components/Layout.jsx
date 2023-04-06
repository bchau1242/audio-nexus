import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Providers } from "./Providers";

const Layout = ({ children }) => {
  return (
    <div className="layout" suppressHydrationWarning>
      <Head>
        <title>AudioNexus</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <Providers>{children}</Providers>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
