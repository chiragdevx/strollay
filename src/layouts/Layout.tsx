import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/common/Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
