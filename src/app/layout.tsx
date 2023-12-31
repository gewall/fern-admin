import React from "react";
import { Providers } from "../providers/providers";
import { useSidebarStore } from "@/providers/stores/stores";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
