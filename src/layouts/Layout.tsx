import React, { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/common/Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
