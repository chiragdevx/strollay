import localFont from "next/font/local";

export const bogue = localFont({
  src: [
    {
      path: "../../../public/fonts/bogue.ttf",
      weight: "300",
    },
  ],
  variable: "--font-bogue",
});
