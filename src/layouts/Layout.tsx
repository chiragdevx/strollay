import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import HeroSection from "@/components/heroSection/HeroSection";
import Services from "@/components/services/Services";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />

      {children}
      {/* <>Footer</> */}
    </div>
  );
}

export default Layout;
