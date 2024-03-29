import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
