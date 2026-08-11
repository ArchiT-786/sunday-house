// import "../styles/globals.css";

// import {
//   fontGeist,
//   fontHeading,
//   fontSans,
//   fontUrban,
// } from "@/assets/fonts";

// import { SessionProvider } from "next-auth/react";
// import { ThemeProvider } from "next-themes";

// import { cn, constructMetadata } from "@/lib/utils";
// import { Toaster } from "@/components/ui/sonner";
// import { TailwindIndicator } from "@/components/tailwind-indicator";

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// // export const metadata = constructMetadata();

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />

//       <body
//         className={cn(
//           "min-h-screen bg-background text-foreground font-sans antialiased",
//           "selection:bg-primary selection:text-primary-foreground",
//           fontSans.variable,
//           fontUrban.variable,
//           fontHeading.variable,
//           fontGeist.variable,
//         )}
//       >
//         <SessionProvider>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="light"
//             enableSystem={false}
//             disableTransitionOnChange
//           >

//             <Toaster
//               richColors
//               closeButton
//               position="bottom-right"
//             />

//             <TailwindIndicator />
//           </ThemeProvider>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }
import "../styles/globals.css";

import {
  fontGeist,
  fontHeading,
  fontSans,
  fontUrban,
} from "@/assets/fonts";

import { ThemeProvider } from "next-themes";

import { cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { TailwindIndicator } from "@/components/tailwind-indicator";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          "selection:bg-primary selection:text-primary-foreground",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}

          <Toaster
            richColors
            closeButton
            position="bottom-right"
          />

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}