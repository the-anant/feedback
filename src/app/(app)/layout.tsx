import Navbar from "@/components/NavBar";
import { ThemeProvider } from "@/context/themProvider";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
    <div className="flex-1 flex flex-col h-full">
      {/* <Navbar /> */}
      {children}
    </div>
    </ThemeProvider>
  );
}

