// app/layout.tsx
import { Inter } from "next/font/google";
import HomeHeader from "@/components/home/layout/HomeHeader";
import HomeFooter from "@/components/home/layout/HomeFooter";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
}
