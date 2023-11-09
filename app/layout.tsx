import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Enhanced Writing Assistant",
  description:
    "The AI-Enhanced Writing Assistant is your creative companion in the world of writing. Whether you're crafting essays, articles, or creative content, this web application powered by Next.js and OpenAI will elevate your writing to new heights. With grammar and spelling checks, style recommendations, and AI-driven suggestions, it's like having a writing coach at your fingertips. Improve your writing, enrich your vocabulary, and enhance your content with this smart, user-friendly tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
