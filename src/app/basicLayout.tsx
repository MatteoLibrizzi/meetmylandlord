import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactQueryProvider } from "@/app/query-provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { classNames } from "./utils";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
const inter = Inter({ subsets: ["latin"] });

export default function BasicLayour({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <ReactQueryProvider>
          <body className={inter.className + " "}>
            <div className="relative flex flex-col">{children}</div>
          </body>
        </ReactQueryProvider>
      </UserProvider>
    </html>
  );
}
