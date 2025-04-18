import type { ReactNode } from "react";
import { ThemeProvider } from "@/context";

interface Props {
  children: ReactNode
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
