import NavbarPrimary from "@/components/navbar/NavbarPrimary";
import NavbarSecondary from "@/components/navbar/NavbarSecondary";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import HeroSection from "@/components/heroSection/HeroSection";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />
      <HeroSection />

      {children}
      {/* <>Footer</> */}
    </div>
  );
}

export default Layout;
